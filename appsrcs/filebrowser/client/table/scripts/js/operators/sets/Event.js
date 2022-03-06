web.app.filebrowser.src.table.operators.sets.Event = function(web){
    this.withID = function(info){
        let trs = $('#'+info.id+'.window').find('tbody').find('tr')
        trs.each(function(){
            web.app.filebrowser.table.event.forSelf($(this))
            web.app.filebrowser.contextmenu.event.forTable($(this))
        })
    }
    this.withTrs = function(trs){
        trs.forEach(function(tr){
            web.app.filebrowser.table.event.forSelf(tr)
            web.app.filebrowser.contextmenu.event.forTable(tr)
        })
    }
}