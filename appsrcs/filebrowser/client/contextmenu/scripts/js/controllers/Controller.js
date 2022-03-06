web.app.filebrowser.src.contextmenu.controllers.Controller = function(web){
    this.appearance = new FilebrowserContextmenuAppearanceController(web)
    this.newDirectory = function(event){
        web.app.filebrowser.self.operates.newDirectory(event)
    }
    this.paste = function(event){
        web.app.filebrowser.self.operates.paste(event)
    }
    this.upload = function(event){
        web.app.filebrowser.self.operates.upload(event)
    }
    this.rename = function(event){
        web.app.filebrowser.self.operates.rename(event)
    }
    this.copy = function(event){
        web.app.filebrowser.self.operates.copy(event)
    }
    this.cut = function(event){
        web.app.filebrowser.self.operates.cut(event)
    }
    this.delete = function(event){
        web.app.filebrowser.self.operates.delete(event)
    }
    this.download = function(event){
        web.app.filebrowser.self.operates.download(event)
    }
    this.share = function(event){
        web.app.filebrowser.self.operates.share(event)
    }
}