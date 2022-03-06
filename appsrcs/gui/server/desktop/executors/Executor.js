module.exports = function Executor(web){
    let Initialization = require('./Initialization')
    let Redirect = require('./Redirect')
    let User = require('./User')
    this.init = new Initialization(web)
    this.redirect = new Redirect(web)
    this.user = new User(web)
}