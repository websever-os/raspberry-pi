web.app.filebrowser.src.table.controllers.Selection = function(web){
    this.key = null
    this.forTr = function(event){
        if(navigator.platform.includes('Mac'))
            this.key = event.metaKey   
        else
            this.key = event.ctrlKey
        if(event.button == 0)
			if(!this.key)
                web.app.filebrowser.table.operates.selection.normally(event)
			else if(this.key)
                web.app.filebrowser.table.operates.selection.withCtrlKey(event)
    }
    this.forInput = function(event){
        web.app.filebrowser.table.operates.selection.withCtrlKey(event)
    }
}