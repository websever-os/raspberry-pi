module.exports = function Loader(web){
    let App = require('./App')
    let Data = require('./Data')
    this.app = new App(web)
    this.data = new Data(web)
}