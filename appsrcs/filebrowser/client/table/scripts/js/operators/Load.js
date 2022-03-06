web.app.filebrowser.src.table.operators.Load = function(web){
    this.directory = function(event){
        if($(event.target).prop("tagName") == 'TD'){
            let info = null
            let win = $(event.target).closest('.window')
            let path = win.find('.path').html()
            let id = win.attr('id')
            let name = $(event.target).parent().find('.name').html()
            path += '/' + name
            info = {id:id,path:path}
            web.app.filebrowser.table.executes.loading.directory(info)
        }
    }
}