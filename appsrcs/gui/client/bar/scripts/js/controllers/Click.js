web.app.gui.src.bar.controllers.Click = function(web){
    this.forSingle = async function(event){
        let node = web.app.gui.window.operates.gettingNode(event)
        if(!node.win.screen.isOn){
            web.app.gui.window.operates.restorationFromMin(node)
        }else if(!node.win.screen.isTop){
            await web.app.gui.window.operates.focusing(node)
        }else{
            web.app.gui.window.operates.min(node)
        }
        web.app.gui.window.operates.sheltering(node)
    }
}