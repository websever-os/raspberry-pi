web.app.gui.src.window.controllers.buttons.Button = function(web){
    this.ofMin = new WindowMinButtonController(web)
    this.ofMax = new WindowMaxButtonController(web)
    this.ofClose = new WindowCloseButtonController(web)
    this.ofRestoration = new WindowRestorationButtonController(web)
    this.ofMaxAndRestoration = async function(event){
        let node = web.app.gui.window.operates.gettingNode(event)
        await web.app.gui.window.operates.focusing(node)
        web.app.gui.window.operates.sheltering(node)
        if(!node.win.screen.isMax)
            this.ofMax.bySelf(node)
        else
            this.ofRestoration.bySelf(node)
        web.app.gui.window.operates.sheltering(node)
    }
}