web.app.gui.src.window.controllers.buttons.Close = function(web){
    this.bySelf = async function(event){
        let node = web.app.gui.window.operates.gettingNode(event)
        await web.app.gui.window.operates.focusing(node)
        web.app.gui.window.operates.sheltering(node)
        web.app.gui.window.operates.closing()
        web.app.gui.window.operates.sheltering(node)
    }
}