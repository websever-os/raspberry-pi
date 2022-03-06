module.exports = function URL(web){
    let Public = require('./Public')
    this.ofPublic = new Public(web)
}