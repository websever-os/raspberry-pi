module.exports = function Menubar(web){
    let Executor = require('./executors/Executor')
    let Operator = require('./operators/Operator')
    this.executes = new Executor(web)
    this.operates = new Operator(web)
}