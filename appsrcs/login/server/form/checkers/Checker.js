module.exports = function Checker(web){
    let User = require('./User')
    this.user = new User(web)
}