module.exports = function Executor(web){
    let Load = require('./Load')
    this.loading = new Load(web)
}