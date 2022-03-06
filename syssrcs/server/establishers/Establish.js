module.exports = function Establish(web){
    let Session = require('./Session')
    this.session = new Session(web)
}