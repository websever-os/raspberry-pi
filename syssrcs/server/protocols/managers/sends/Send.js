const Data = require('./Data')

module.exports = function Send(web){
    this.data = new Data(web)
}