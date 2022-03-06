web.app.filebrowser.src.winContentDiv.events.Event = function(web){
    this.forDiv = function(winJQObj){
        let divJQObj = winJQObj.find('div.filebrowser')
        divJQObj.on('click',function(event){
            web.app.filebrowser.winContentDiv.controls.clearance(event)
        })
        divJQObj.on('drop',function(event){
            event.preventDefault()
            if(event.originalEvent.dataTransfer.files.length)
                web.app.filebrowser.winContentDiv.controls.upload(event)
		})
		divJQObj.on('dragover',function(event){
            event.preventDefault()
		})
        web.app.filebrowser.rubberband.event.forStart(divJQObj)
        web.app.filebrowser.rubberband.event.forWork(divJQObj)
        web.app.filebrowser.rubberband.event.forEnd(divJQObj)
        web.app.filebrowser.contextmenu.event.forDiv(divJQObj)
    }
}