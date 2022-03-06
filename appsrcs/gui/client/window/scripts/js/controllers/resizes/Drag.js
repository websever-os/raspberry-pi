web.app.gui.src.window.controllers.resizes.Drag = function(web){
    this.node = null
    this.classname = null
    this.classOf = null
    this.start = async function(event){
        this.node = web.app.gui.window.operates.gettingNode(event)
        await web.app.gui.window.operates.focusing(this.node)
        web.app.gui.window.engine.ofResize.init(this.node)
        let jQObj = this.node.win.view.jQObj
        this.classname = $(event.target).attr('class').split(' ')[0]
        this.classOf = this.node.win.classOf
        this.node.win.screen.isMax = false
        web.app.gui.window.operates.sheltering(this.node)
        this.node.mode = 'resize'
    }
    this.ing = function(event){
        this.node.mode = 'resize'
        web.app.gui.window.engine.ofResize.works(this.classname,this.classOf,event)
        web.app.gui.window.engine.ofResize.setsSubelements()
        web.app.gui.window.operates.sheltering(this.node)
    }
    this.end = function(event){
        this.node.mode = 'resize'
        web.app.gui.window.engine.ofResize.checksMinSize()
        web.app.gui.window.engine.ofResize.setsSubelements()
        web.app.gui.window.operates.sheltering(this.node)
    }
}