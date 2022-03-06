module.exports = function App(web){
    let Desktop = require('./desktop/Desktop')
    let Icontable = require('./icontable/Icontable')
    let Window = require('./window/Window')
    this.desktop = new Desktop(web)
    this.icontable = new Icontable(web)
    this.window = new Window(web)
}