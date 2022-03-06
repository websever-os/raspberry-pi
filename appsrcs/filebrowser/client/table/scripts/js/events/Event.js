web.app.filebrowser.src.table.events.Event = function(web){
    this.forSelf = function(trJQObj){
        trJQObj.on('click',function(event){
            web.app.filebrowser.table.controls.selection.forTr(event)
        })
        trJQObj.on('dblclick',function(event){
            event.preventDefault()
		    event.stopPropagation()
            web.app.filebrowser.table.controls.change.forDirectory(event)
        })
        /*
        trJQObj.on('click',function(event){
            event.preventDefault()
            event.stopPropagation()
            web.app.filebrowser.self.controls.selection.forTr(event)
        })
        */
        trJQObj.find('input').on('click',function(event){
		    event.stopPropagation()
            web.app.filebrowser.table.controls.selection.forInput(event)
        })
    }
}