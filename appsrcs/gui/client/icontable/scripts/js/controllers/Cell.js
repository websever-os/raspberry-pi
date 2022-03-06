web.app.gui.src.icontable.controllers.Cell = function(web){
    this.drop = function(event){
        let id = event.originalEvent.dataTransfer.getData('id')
        if(id != ''){
            let target = $(event.target)
            target.append($('div#'+id+'.icon'))
            let td = target.parent()
            let cell = td.index()
            let row = td.parent().index()
            let icon = web.app.gui.json.icons[id]
            icon.row = row
            icon.cell = cell
            info = {id:id, row:row, cell:cell}
            web.app.gui.icontable.executes.icon.update.ofCoordinate(info)
        } 
    }
}