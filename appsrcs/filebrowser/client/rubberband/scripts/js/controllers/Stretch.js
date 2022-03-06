web.app.filebrowser.src.rubberband.controllers.Stretch = function(web){
    this.isWorking = false
    this.key = null
    this.toStart = function(event){
        if(navigator.platform.includes('Mac'))
            this.key = event.metaKey   
        else
            this.key = event.ctrlKey
        if(event.button == 0){
            this.isWorking = true
            web.app.gui.isSynchronization = true
            let divJQObj = $(event.target)
            let winJQObj = divJQObj.closest('.window')
			if(!this.key)
                web.app.filebrowser.rubberband.operates.stretching.toStart.normally(divJQObj,winJQObj,event)
            else if(this.key)
                web.app.filebrowser.rubberband.operates.stretching.toStart.withCtrl(divJQObj,winJQObj,event)
        }
    }
    this.toWork = function(event){
        if(this.isWorking)
            if(!this.key)
                web.app.filebrowser.rubberband.operates.stretching.toWork.normally(event)
            else if(this.key)
                web.app.filebrowser.rubberband.operates.stretching.toWork.withCtrl(event)
    }
    this.toEnd = function(event){
        if(this.isWorking){
            this.isWorking = false
            web.app.filebrowser.rubberband.operates.stretching.toEnd(event)
            web.app.gui.isSynchronization = false
        }
    }
}