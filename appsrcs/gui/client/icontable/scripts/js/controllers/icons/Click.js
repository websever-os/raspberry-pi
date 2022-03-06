web.app.gui.src.icontable.controllers.icons.Click = function(web){
    this.forDouble = function(event){
        let icon = $(event.target).closest('.icon')
        icon = web.app.gui.json.icons[icon.attr('id')]
        let node = web.app.gui.window.operates.newWindow(icon)
        web.app.gui.bar.operates.newBar(node,icon)
        web.app.gui.window.operates.sheltering(node)
    }
}