module.exports = function App(web){
    let Desktop = require('./desktop/Desktop')
    let Icontable = require('./icontable/Icontable')
    let Msg = require('./msg/Msg')
    let Window = require('./window/Window')
    this.desktop = new Desktop(web)
    this.icontable = new Icontable(web)
    this.msg = new Msg(web)
    this.window = new Window(web)
}