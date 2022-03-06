web.app.gui.src.icontable.controllers.icons.Drag = function(web){
    this.start = function(event){
        let target = $(event.target)
        if(target.prop("tagName") == 'IMG' || target.hasClass('name'))
            target = target.parent()
        let id = target.attr('id')    
        if(id !== undefined)
            event.originalEvent.dataTransfer.setData('id', id)
    }
}