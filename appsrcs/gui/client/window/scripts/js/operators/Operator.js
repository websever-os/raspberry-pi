web.app.gui.src.window.operators.Operator = function(web){
    this.node = null
    this.recovery = function(){
        let windows = web.app.gui.json.windows
        web.app.gui.isSynchronization = true
        web.app.gui.isRecovered = true
        windows.forEach(function(info){
            let win = new web.app.gui.window.Model()
            win.setsRecovery(info)
            win.view.assembles()
            win.setsTitle(info.title)
            win.setsContentView(info.view)
            let node = web.app.gui.window.engine.ofEnum.recovers(win)
            let jQObj = win.view.jQObj
            jQObj.attr('id',info.id)
            if(win.screen.isMax){
                jQObj.css('width',$('#background').width())
                jQObj.css('height',$('#background').height())
                jQObj.css('left',0)
                jQObj.css('top',0)
            }else{
                jQObj.css('left',info.left.onScreen)
                jQObj.css('top',info.top.onScreen)
                jQObj.width(info.width.onScreen)
                jQObj.height(info.height.onScreen)
            }
            if(win.screen.isOn) $('#winzone').prepend(jQObj)
            web.app.gui.window.engine.ofResize.init(node)
            web.app.gui.window.engine.ofResize.setsSubelements()
            web.app.gui.window.event.init(node)
            web.app.gui.bar.operates.recovery(info)
        })
        web.app.gui.isSynchronization = false
        web.app.gui.isRecovered = false
    }
    this.adding = function(info){
        let win = new web.app.gui.window.Model()
        win.setsRecovery(info)
        win.view.assembles()
        win.setsTitle(info.title)
        win.setsContentView(info.view)
        let node = web.app.gui.window.engine.ofEnum.adds(win)
        let jQObj = win.view.jQObj
        jQObj.attr('id',info.id)
        jQObj.css('left',info.left.onScreen)
        jQObj.css('top',info.top.onScreen)
        jQObj.width(info.width.onScreen)
        jQObj.height(info.height.onScreen)
        if(win.screen.isOn) $('#winzone').prepend(jQObj)
        web.app.gui.window.engine.ofResize.init(node)
        web.app.gui.window.engine.ofResize.setsSubelements()
        web.app.gui.window.event.init(node)
        web.app.gui.bar.operates.recovery(info)
    }
    this.newWindow = function(icon){
        let win = new web.app.gui.window.Model()
        if(icon.type !== undefined)
            win.type = icon.type
        win.view.assembles()
        web.app.gui.window.engine.ofCoordinate.checks(win)
        let node = web.app.gui.window.engine.ofEnum.adds(win)
        win.setsID(node.win.id)
        win.setsTitle(icon.title)
        $('#winzone').prepend(win.view.jQObj)
        web.app.gui.window.event.init(node)
        node.mode = 'add'
        win.icon = icon
        //app loading
        if(win.type.iframe){
            //iframe mode
            var wIframe = win.view.iframeJQObj
            wIframe.attr('src','/'+icon.path)
            wIframe.attr('name',icon.path)
        }else{
            //wss mode
            web.sys.executes.app(icon.path)
            web.sys.response = 'web.app.gui.window.operates.loadingApp'
            this.node = node
        }
        return node
    }
    //wss app loading
    this.loadingApp = function(info){
        let div = $('<div></div>')
        div.addClass('win-content')
        if(info.appname !== undefined && info.appname != null) div.addClass(info.appname)
        div.html(info.view)
        let script = $('<script></script>')
        script.attr('id',info.appname)
        script.attr('type', 'text/javascript')
        script.html('web.app.'+info.appname+'.self.executes.init.task()')
        this.node.win.view.bodyJQObj.append(div)
        this.node.win.view.bodyJQObj.append(script)
    }
    this.gettingNode = function(event){
        let jQObj = $(event.target).closest('.id')
		let id = jQObj.attr('id')
		return web.app.gui.window.engine.ofEnum.finds(id)
    }
    this.focusing = function(node){
        return new Promise(function(resolve, reject){
            node.win.z.beforeFocus = node.win.getsZIndex()
            let flag = web.app.gui.window.engine.ofEnum.focuses(node)
            if(flag){
                node.mode = 'focus'
            }
            resolve()
        })
    }
    this.closing = function(){
		let node = web.app.gui.window.engine.ofEnum.closes()
        web.app.gui.bar.operates.closing(node)
        node.mode = 'close'
	}
    this.max = function(node){
        let jQObj = node.win.view.jQObj
        node.win.screen.isMax = true
        this.savingPrevVals(node,'max')
        jQObj.css('width',$('#background').width())
		jQObj.css('height',$('#background').height())
        jQObj.css('left',0)
		jQObj.css('top',0)
        web.app.gui.window.engine.ofResize.init(node)
        web.app.gui.window.engine.ofResize.setsSubelements()
        node.mode = 'max'
	}
    this.min = function(node){
        this.savingPrevVals(node,'min')
		web.app.gui.window.engine.ofEnum.minimizes()
        node.win.view.jQObj.remove()
        node.mode = 'min'
    }
    this.restorationFromMax = function(node){
		node.win.screen.isMax = false
        this.loadingPrevVals(node,'max')
        web.app.gui.window.engine.ofResize.init(node)
        web.app.gui.window.engine.ofResize.setsSubelements()
        node.mode = 'resMax'
	}
    this.restorationFromMin = function(node){
        web.app.gui.window.engine.ofEnum.restoresFromMin(node)
        web.app.gui.window.event.init(node)
        $('#winzone').append(node.win.view.jQObj)
        this.loadingPrevVals(node,'min')
        web.app.gui.window.engine.ofResize.init(node)
        web.app.gui.window.engine.ofResize.setsSubelements()
        node.mode = 'resMin'
	}
    this.loadingPrevVals = function(node, mode){
		let win = node.win
		let jQObj = node.win.view.jQObj
        if(mode == 'max'){
            jQObj.css('left',win.left.beforeMax)
            jQObj.css('top',win.top.beforeMax)
            jQObj.width(win.width.beforeMax)
            jQObj.height(win.height.beforeMax)
            win.left.beforeMax = null
            win.top.beforeMax = null
            win.width.beforeMax = null
            win.height.beforeMax = null
        }else if(mode == 'min'){
            jQObj.css('left',win.left.beforeMin)
            jQObj.css('top',win.top.beforeMin)
            jQObj.width(win.width.beforeMin)
            jQObj.height(win.height.beforeMin)
            win.left.beforeMin = null
            win.top.beforeMin = null
            win.width.beforeMin = null
            win.height.beforeMin = null
        }
    }
    this.savingPrevVals = function(node, mode){
		let win = node.win
		let jQObj = node.win.view.jQObj
        if(mode == 'max'){
            win.left.beforeMax = jQObj.position().left
            win.top.beforeMax = jQObj.position().top
            win.width.beforeMax = jQObj.width()
            win.height.beforeMax = jQObj.height()
        }else if(mode == 'min'){
            win.left.beforeMin = jQObj.position().left
            win.top.beforeMin = jQObj.position().top
            win.width.beforeMin = jQObj.width()
            win.height.beforeMin = jQObj.height()
        }
    }
    this.sheltering = function(node){
        if(!web.app.gui.isSynchronization){
            let win = node.win
            let info = {}
            info.id = win.id
            info.title = win.icon.title
            info.mode = node.mode
            info.screen = win.screen
            info.left = win.left
            info.top = win.top
            info.left.onScreen = win.getsLeft()
            info.top.onScreen = win.getsTop()
            info.z = win.z
            info.z.onScreen = win.getsZIndex()
            info.width = win.width
            info.height = win.height
            info.width.onScreen = win.getsWidth()
            info.height.onScreen = win.getsHeight()
            info.icon = win.icon
            info.view = win.getsContentView()
            if(node.mode !== undefined)
                web.app.gui.window.executes.sheltering(info)
            delete node.mode
            delete node.img
        }
    }
    this.synchronization = function(info){
        web.app.gui.isSynchronization = true
        const node = web.app.gui.window.engine.ofEnum.finds(info.id)
        if(info.mode == 'focus'){
            web.app.gui.window.engine.ofEnum.focuses(node)
        }else if(info.mode == 'add'){
            this.adding(info)
        }else if(info.mode == 'close'){
            let node = web.app.gui.window.engine.ofEnum.closes()
            web.app.gui.bar.operates.closing(node)
        }else if(info.mode == 'content'){
            if(node.win.getsContentView() != info.view)
                node.win.setsContentView(info.view)
        }else if(info.mode == 'min'){
            this.min(node)
        }else if(info.mode == 'resMin'){
            this.restorationFromMin(node)
        }else if(info.mode == 'max'){
            this.max(node)
        }else if(info.mode == 'resMax'){
            this.restorationFromMax(node)
        }else if(info.mode == 'move'){
            node.win.setsPosition(info)
        }else if(info.mode == 'resize'){
            node.win.setsPosition(info)
            node.win.view.jQObj.width(info.width.onScreen)
            node.win.view.jQObj.height(info.height.onScreen)
            web.app.gui.window.engine.ofResize.init(node)
            web.app.gui.window.engine.ofResize.setsSubelements()
        }
    }
}