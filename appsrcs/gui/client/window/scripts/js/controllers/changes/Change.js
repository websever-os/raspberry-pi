web.app.gui.src.window.controllers.changes.Change = function(web){
    this.ofBody = function(mutationRecords){
        let wJQObj = $(mutationRecords[0].target).closest('.window')
        let node = web.app.gui.window.engine.ofEnum.finds(wJQObj.attr('id'))
        node.mode = 'content'
        web.app.gui.window.operates.sheltering(node)
    }
}