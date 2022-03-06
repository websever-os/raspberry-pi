web.app.gui.src.window.engines.Resize = function(web){
	this.outer = null
    this.init = function(node){
		let classOf = node.win.classOf
        this.outer = node.win.view.jQObj
        this.outer.minWidth = parseInt(this.outer.css("min-width"))
        this.outer.minHeight = parseInt(this.outer.css("min-height"))
        this.button = this.outer.find("."+classOf.button)
        this.move = this.outer.find("."+classOf.move)
        this.body = this.outer.find("."+classOf.body)
        this.head = this.outer.find("."+classOf.head)
        this.nResize = this.outer.find("."+classOf.n)
        this.wResize = this.outer.find("."+classOf.w)
        this.eResize = this.outer.find("."+classOf.e)
        this.sResize = this.outer.find("."+classOf.s)
        this.nwResize = this.outer.find("."+classOf.nw)
        this.neResize = this.outer.find("."+classOf.ne)
        this.swResize = this.outer.find("."+classOf.sw)
        this.seResize = this.outer.find("."+classOf.se)
    }
    this.setsSubelements = function(){
        this.head.width(this.outer.width())
        this.body.width(this.outer.width())
        this.body.height(this.outer.height()-this.head.height())
        this.move.width(this.outer.width()-this.button.width()*3)
        this.nResize.width(this.outer.width()-20)
        this.sResize.width(this.outer.width()-20)
        this.wResize.height(this.outer.height()-20)
        this.eResize.height(this.outer.height()-20)
		const oLeft = this.outer.offset().left
		const oTop = this.outer.offset().top
		const oWidth = this.outer.width()
		if(oLeft <= -oWidth + 150){
			this.outer.offset({left:-oWidth + 150})
		}else if (oLeft > window.innerWidth - 30){
			this.outer.offset({left:window.innerWidth - 30})
		}else if(oTop > window.innerHeight - 30){
			this.outer.offset({top:window.innerHeight - 30})
		}
    }
	this.checksMinSize = function(){
		if(this.outer.width() <= this.outer.minWidth){
			this.outer.width(this.outer.minWidth+1)
		}else if(this.outer.height() <= this.outer.minHeight){
			this.outer.height(this.outer.minHeight+1)
		}
	}
    this.works = function(className, classOf, event){
        this.totalMouseX = event.clientX + window.pageXOffset
		this.totalMouseY = event.clientY + window.pageYOffset
        if (this.totalMouseX == 0)
			return 0
		if (this.totalMouseY == 0)
			return 0
        this.tmpGapOfWidth = this.totalMouseX - this.outer.offset().left
		this.tmpGapOfHeight = this.totalMouseY - this.outer.offset().top
        if(this.outer.width() > this.outer.minWidth && this.outer.height() > this.outer.minHeight){
            if (className == classOf.se) {
				this.outer.height(this.tmpGapOfHeight)
				this.outer.width(this.tmpGapOfWidth)
			} else if (className == classOf.ne) {
				this.outer.height(this.outer.height() - this.tmpGapOfHeight)
				this.outer.width(this.tmpGapOfWidth)
				if (this.outer.height() >= this.outer.minHeight)
					this.outer.offset({top:this.totalMouseY})
			} else if (className == classOf.e) {
				this.outer.width(this.tmpGapOfWidth)
			} else if (className == classOf.s) {
				this.outer.height(this.tmpGapOfHeight)
			} else if (className == classOf.sw) {
				this.outer.height(this.tmpGapOfHeight)
				this.outer.width(this.outer.width() - this.tmpGapOfWidth)
				if (this.outer.width() >= this.outer.minWidth)
					this.outer.offset({left:this.totalMouseX})
			} else if (className == classOf.w) {
				this.outer.width(this.outer.width() - this.tmpGapOfWidth)
				if (this.outer.width() >= this.outer.minWidth)
					this.outer.offset({left:this.totalMouseX})
			} else if (className == classOf.n) {
				this.outer.height(this.outer.height() - this.tmpGapOfHeight)
				if (this.outer.height() >= this.outer.minHeight)
					this.outer.offset({top:event.clientY})
			} else if (className == classOf.nw) {
				this.outer.width(this.outer.width() - this.tmpGapOfWidth)
				this.outer.height(this.outer.height() - this.tmpGapOfHeight)
				if (this.outer.width() >= this.outer.minWidth)
					this.outer.offset({left:this.totalMouseX})
				if (this.outer.height() >= this.outer.minHeight)
					this.outer.offset({top:this.totalMouseY})
			}
        }
    }
}
