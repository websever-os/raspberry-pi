web.app.gui.src.window.controllers.moves.Drag = function(web){
    this.node = null
    this.start = async function(event){
        this.node = web.app.gui.window.operates.gettingNode(event)
        await web.app.gui.window.operates.focusing(this.node)
        web.app.gui.window.engine.ofMove.init(this.node)
        this.node.win.screen.isMax = false
        web.app.gui.window.operates.sheltering(this.node)
        this.node.mode = 'move'
    }
    this.ing = function(event){
        web.app.gui.window.engine.ofMove.works(event)
        this.node.mode = 'move'
        web.app.gui.window.operates.sheltering(this.node)
    }
    this.end = function(event){
        this.node.mode = 'move'
        web.app.gui.window.operates.sheltering(this.node)
    }
}