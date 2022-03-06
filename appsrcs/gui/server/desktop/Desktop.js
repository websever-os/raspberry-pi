module.exports = function App(web){
    let Customizer = require('./customizers/Customizer')
    let Executor = require('./executors/Executor')
    let Operator = require('./operators/Operator')
    this.customizes = new Customizer(web)
    this.executes = new Executor(web)
    this.operates = new Operator(web)
}