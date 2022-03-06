const Operator = require('./operators/Operator')
const Engine = require('./engines/Engine')
const Executor = require('./executors/Executor')

module.exports = function Window(web){
    this.operates = new Operator(web)
    this.engine = new Engine(web)
    this.executes = new Executor(web)
}