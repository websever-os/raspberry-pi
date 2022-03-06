function App(web){
    this.isLoaded = true
    this.contextmenu = new FilebrowserContextmenu(web)
    this.rubberband = new FilebrowserRubberband(web)
    this.self = new FilebrowserSelf(web)
    this.table = new FilebrowserTable(web)
    this.winContentDiv = new FilebrowserWinContentDiv(web)
}