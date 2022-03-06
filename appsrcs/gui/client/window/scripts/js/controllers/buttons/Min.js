web.app.gui.src.window.controllers.buttons.Min = function(web){
    this.bySelf = async function(event){
        let node = web.app.gui.window.operates.gettingNode(event)
        await web.app.gui.window.operates.focusing(node)
        web.app.gui.window.operates.sheltering(node)
        web.app.gui.window.operates.min(node)
        web.app.gui.window.operates.sheltering(node)
    }
}