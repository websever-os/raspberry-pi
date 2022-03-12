function App(web){
    this.json = {}
    this.isDesktopMode = true
    this.isRecovered = false
    this.isSynchronization = false
    this.background = new Background(web)
    this.bar = new Bar(web)
    this.barzone = null
    this.desktop = new Desktop(web)
    this.icontable = new Icontable(web)
    this.menubar = new Menubar(web)
    this.msg = new Msg(web)
    this.taskbar = null
    this.window = new Window(web)
    this.winzone = null
}