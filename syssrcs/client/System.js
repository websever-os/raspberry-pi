function System(web){
    this.isDesktopMode = false
    this.adjusts = new Adjustor(web)
    this.establishes = new Establisher(web)
    this.executes = new Executor(web)
    this.protocol = new Protocol(web)
}