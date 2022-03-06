module.exports = function Icon(web){
    let List = require('./List')
    let Update = require('./Update')
    this.list = new List(web)
    this.update = new Update(web)
}