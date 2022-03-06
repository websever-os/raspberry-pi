module.exports = function Operator(web){
    let Load = require('./Load')
    this.loading = new Load(web)
}