web.app.gui.src.window.engines.Coordinate = function(web){
    this.checks = function(win){
        let left = 100
        let top = 100 
        this.sets(web.app.gui.window.engine.ofEnum.nodes.next,win,left,top)
    }
    this.sets = function(node, win, left, top){
        if(node != null){
            let tmpLeft = node.win.left.onScreen
            let tmpTop = node.win.top.onScreen
            if(left == tmpLeft && top == tmpTop){
                left+=35
                top+=35
                this.sets(web.app.gui.window.engine.ofEnum.nodes.next,win,left,top)
            }else
                this.sets(node.next,win,left,top)
        }else{
            let jQObj = win.view.jQObj
            win.left.onScreen = left
            win.top.onScreen = top
            jQObj.css("left",left)
			jQObj.css("top",top)
		}
    }
}