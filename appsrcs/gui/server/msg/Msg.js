module.exports = function Msg(web){
    let Executor = require('./executors/Executor')
    this.executes = new Executor(web)
}