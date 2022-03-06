module.exports = function Path(web){
    let App = require('./App')
    let System = require('./System')
    let View = require('./View')
    this.ofApp = new App(web)
    this.ofSys = new System(web)
    this.ofView = new View(web)
}