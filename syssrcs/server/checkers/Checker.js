const fs = require('fs')

module.exports = function Checker(web){
    let App = require('./App')
    let URL = require('./urls/URL')
    this.app = new App(web)
    this.url = new URL(web)
    this.path = function(path){
        return fs.existsSync(path)
    }
}