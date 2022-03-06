web.app.filebrowser.src.rubberband.events.Event = function(web){
    this.forStart = function(divJQObj){
        divJQObj.on('mousedown',function(event){
            web.app.filebrowser.rubberband.controls.stretching.toStart(event)
        })
    }
    this.forWork = function(divJQObj){
        divJQObj.on('mousemove',function(event){
            web.app.filebrowser.rubberband.controls.stretching.toWork(event)
        })
    }
    this.forEnd = function(divJQObj){
        divJQObj.on('mouseup',function(event){
            web.app.filebrowser.rubberband.controls.stretching.toEnd(event)
        })
    }
}