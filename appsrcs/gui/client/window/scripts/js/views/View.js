web.app.gui.src.window.views.View = function(){
	this.nResize = function(){
        let div = $('<div></div>')
        div.addClass(this.classOf.n)
        div.addClass(this.classOf.row)
		div.addClass(this.classOf.drag)
        div.attr('draggable','true')
        this.nResizeJQObj = div
    }
    this.wResize = function(){
        let div = $('<div></div>')
        div.addClass(this.classOf.w)
        div.addClass(this.classOf.col)
		div.addClass(this.classOf.drag)
        div.attr('draggable','true')
        this.wResizeJQObj = div
    }
    this.eResize = function(){
        let div = $('<div></div>')
        div.addClass(this.classOf.e)
        div.addClass(this.classOf.col)
		div.addClass(this.classOf.drag)
        div.attr('draggable','true')
        this.eResizeJQObj = div
    }
    this.sResize = function(){
        let div = $('<div></div>')
        div.addClass(this.classOf.s)
        div.addClass(this.classOf.row)
		div.addClass(this.classOf.drag)
        div.attr('draggable','true')
        this.sResizeJQObj = div
    }
    this.seResize = function(){
        let div = $('<div></div>')
        div.addClass(this.classOf.se)
        div.addClass(this.classOf.edge)
		div.addClass(this.classOf.drag)
        div.attr('draggable','true')
        this.seResizeJQObj = div
    }
    this.swResize = function(){
        let div = $('<div></div>')
        div.addClass(this.classOf.sw)
        div.addClass(this.classOf.edge)
		div.addClass(this.classOf.drag)
        div.attr('draggable','true')
        this.swResizeJQObj = div
    }
    this.neResize = function(){
        let div = $('<div></div>')
        div.addClass(this.classOf.ne)
        div.addClass(this.classOf.edge)
		div.addClass(this.classOf.drag)
        div.attr('draggable','true')
        this.neResizeJQObj = div
    }
    this.nwResize = function(){
        let div = $('<div></div>')
        div.addClass(this.classOf.nw)
        div.addClass(this.classOf.edge)
		div.addClass(this.classOf.drag)
        div.attr('draggable','true')
        this.nwResizeJQObj = div
    }
    this.move = function(){
        let div = $('<div></div>')
        div.addClass(this.classOf.move)
		div.addClass(this.classOf.drag)
        div.attr('draggable','true')
        this.moveJQObj = div
    }
    this.title = function(){
        let div = $('<div></div>')
        div.addClass(this.classOf.title)
        this.titleJQObj = div
    }
	this.minButton = function(){
		let div = $('<div></div>')
        let img = $('<img/>')
		div.append(img)
        div.addClass(this.classOf.button)
		div.addClass(this.classOf.min)
		img.attr('src','/gui/client/window/media/images/min.png')
        this.minButtonJQObj = div
    }
    this.maxButton = function(){
		let div = $('<div></div>')
        let img = $('<img/>')
		div.append(img)
        div.addClass(this.classOf.button)
		div.addClass(this.classOf.max)
		img.attr('src','/gui/client/window/media/images/max.png')
        this.maxButtonJQObj = div
    }
    this.xButton = function(){
		let div = $('<div></div>')
        let img = $('<img/>')
		div.append(img)
        div.addClass(this.classOf.button)
		div.addClass(this.classOf.x)
		img.attr('src','/gui/client/window/media/images/x.png')
        this.xButtonJQObj = div
    }
    this.iframe = function(){
        let iframe = $('<iframe></iframe>')
        iframe.attr('seamless')
        this.iframeJQObj = iframe
    }
    this.body = function(){
        let div = $('<div></div>')
        div.addClass(this.classOf.body)
        this.bodyJQObj = div
    }
    this.head = function(){
        let div = $('<div></div>')
        div.addClass(this.classOf.head)
		this.headJQObj = div
    }
    this.outer = function(){
        let div = $('<div></div>')
		div.addClass(this.classOf.outer)
        div.addClass(this.classOf.id)
		this.outerJQObj = div
    }
    this.assembles = function(){
		this.outer()
		this.body()
        if(this.type.head){
            this.head()
			this.outerJQObj.append(this.headJQObj)
		}
        if(this.type.iframe){
            this.iframe()
            this.bodyJQObj.append(this.iframeJQObj)
        }
		if(this.type.resize){
			this.nResize()
			this.wResize()
			this.eResize()
			this.sResize()
			this.seResize()
			this.swResize()
			this.neResize()
			this.nwResize()
		}
        if(this.type.enum){
            this.outerJQObj.addClass('window')
        }
		if(this.type.move){ 
			this.move()
            this.title()
            this.moveJQObj.append(this.titleJQObj)
			this.headJQObj.append(this.moveJQObj)
		}
		if(this.type.xButton){ 
			this.xButton()
			this.headJQObj.append(this.xButtonJQObj)
		}
		if(this.type.maxButton){
			this.maxButton()
			this.headJQObj.append(this.maxButtonJQObj)
		}
		if(this.type.minButton){
			this.minButton()
			this.headJQObj.append(this.minButtonJQObj)
		}
		if(this.type.resize){
			this.outerJQObj.append(this.nwResizeJQObj)
			this.outerJQObj.append(this.neResizeJQObj)
			this.outerJQObj.append(this.swResizeJQObj)
			this.outerJQObj.append(this.seResizeJQObj)
			this.outerJQObj.append(this.nResizeJQObj)
			this.outerJQObj.append(this.wResizeJQObj)
			this.outerJQObj.append(this.eResizeJQObj)
			this.outerJQObj.append(this.sResizeJQObj)
		}
        
		this.outerJQObj.append(this.bodyJQObj)
		this.jQObj = this.outerJQObj
    }
}