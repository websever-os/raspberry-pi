web.app.filebrowser.src.table.operators.Load = function(web){
    this.directory = function(event){
        
        if($(event.target).prop("tagName") == 'TD'){
            let name = $(event.target).parent().find('.name').html()
            let type = $(event.target).parent().find('.type').html()
            if(type == 'directory' || name == '..'){
                let info = null
                let win = $(event.target).closest('.window')
                let path = win.find('.path').html()
                let id = win.attr('id')
                path += '/' + name
                info = {id:id,path:path}
                web.app.filebrowser.table.executes.loading.directory(info)
            }
        }
    }
}