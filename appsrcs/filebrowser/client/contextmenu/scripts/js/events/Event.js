web.app.filebrowser.src.contextmenu.events.Event = function(web){
    this.forTable = function(trJQObj){
        trJQObj.on('contextmenu',function(event){
            event.preventDefault()
            event.stopPropagation()
            web.app.filebrowser.contextmenu.controls.appearance.forTable(event)
        })
    }
    this.forDiv = function(divJQObj){
        divJQObj.on('contextmenu',function(event){
            event.preventDefault()
            event.stopPropagation()
            web.app.filebrowser.contextmenu.controls.appearance.forDiv(event)
        })
    }
    this.forSelf = function(contextmenu, base, fEvent){
        contextmenu.newDirectoryJQObj.on('click',function(event){
            web.app.filebrowser.contextmenu.controls.newDirectory(event)
        })
        contextmenu.pasteJQObj.on('click',function(event){
            web.app.filebrowser.contextmenu.controls.paste(event)
        })
        contextmenu.uploadJQObj.on('click',function(event){
            web.app.filebrowser.contextmenu.controls.upload(event)
        })
        if(base == 'TABLE'){
            contextmenu.renameJQObj.on('click',function(event){
                web.app.filebrowser.contextmenu.controls.rename(event)
            })
            contextmenu.copyJQObj.on('click',function(event){
                web.app.filebrowser.contextmenu.controls.copy(event)
            })
            contextmenu.cutJQObj.on('click',function(event){
                web.app.filebrowser.contextmenu.controls.cut(event)
            })
            contextmenu.deleteJQObj.on('click',function(event){
                web.app.filebrowser.contextmenu.controls.delete(event)
            })
            contextmenu.downloadJQObj.on('click',function(event){
                web.app.filebrowser.contextmenu.controls.download(event)
            })
            contextmenu.shareJQObj.on('click',function(event){
                web.app.filebrowser.contextmenu.controls.share(event)
            })
        }
    }
}