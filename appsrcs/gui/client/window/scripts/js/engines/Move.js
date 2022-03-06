web.app.gui.src.window.engines.Move = function(web){
	this.outer = null
	this.init = function(node){
		this.outer = node.win.view.jQObj
	}
    this.pole = {
        prevX:null,
        prevY:null,
        nextX:null,
        nextY:null
    }
    this.works = function(event){
        var gapX = null
		var gapY = null
		var oLeft = this.outer.offset().left
		var oTop = this.outer.offset().top
        var oWidth = this.outer.width()
        var oHeight = this.outer.height()
		if(this.pole.prevX == null){
			this.pole.prevX = event.clientX
			this.pole.prevY = event.clientY
			return 0
		}else{
			this.pole.nextX = event.clientX
			this.pole.nextY = event.clientY
			gapX = this.pole.nextX - this.pole.prevX
			gapY = this.pole.nextY - this.pole.prevY
			if (gapX > 50 || gapY > 50){
				gapX = 1
				gapY = 1
			}else if (gapX < -50 || gapY < -50){
				gapX = -1
				gapY = -1
			}
			oLeft = oLeft + gapX * 2
			oTop = oTop + gapY * 2
            this.outer.offset({left:oLeft,top:oTop})
			if(oLeft <= -oWidth + 150){
				this.outer.offset({left:-oWidth + 150})
			}else if(oTop <= 0){
				this.outer.offset({top:0})
			}else if (oLeft > window.innerWidth - 30){
                this.outer.offset({left:window.innerWidth - 30})
			}else if(oTop > window.innerHeight - 30){
				this.outer.offset({top:window.innerHeight - 30})
			}
			this.pole = {
                prevX:null,
                prevY:null,
                nextX:null,
                nextY:null
            }
			return 0;
		}
    }
}
