web.app.gui.src.icontable.events.Event = function(web){
    this.init = function(){
		const cells = $('div.cell')
        const icons = $('div.icon')
		cells.on('drop',function(event){
            event.preventDefault()
            web.app.gui.icontable.controls.cell.drop(event)
            const files = event.originalEvent.dataTransfer.files
		})
		cells.on('dragover',function(event){
            event.preventDefault()
		})
        icons.on('dragstart',function(event){
            web.app.gui.icontable.controls.icon.drag.start(event)
        })
        icons.on("dblclick",function(event){
            web.app.gui.icontable.controls.icon.click.forDouble(event)            
		})
    }
}