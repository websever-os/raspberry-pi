web.app.gui.src.window.models.JSON = function(win){
	this.outerHTML = null
	this.id = win.id
	this.appname = win.appname
	this.screen = {
        isOn:win.screen.isOn,
        isTop:win.screen.isTop,
        isMax:win.screen.isMax
    }
    this.prevOf = {
        x:win.prevOf.x,
        y:win.prevOf.y,
        width:win.prevOf.width,
        height:win.prevOf.height
    }
}