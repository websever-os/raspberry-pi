web.app.filebrowser.src.self.executors.Executor = function(web){
    this.init = new FilebrowserSelfInitializationExecutor(web)
    this.newDirectory = new FilebrowserSelfNewDirectoryExecutor(web)
    this.paste = new FilebrowserSelfPasteExecutor(web)
    this.upload = new FilebrowserSelfUploadExecutor(web)
    this.rename = new FilebrowserSelfRenameExecutor(web)
    this.copy = new FilebrowserSelfCopyExecutor(web)
    this.cut = new FilebrowserSelfCutExecutor(web)
    this.delete = new FilebrowserSelfDeleteExecutor(web)
    this.download = new FilebrowserSelfDownloadExecutor(web)
    this.share = new FilebrowserSelfShareExecutor(web)
}