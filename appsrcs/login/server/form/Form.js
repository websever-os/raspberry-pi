module.exports = function Form(web){
    let Authenticator = require('./authenticators/Authenticator')
    let Checker = require('./checkers/Checker')
    let Executor = require('./executors/Executor')
    this.authenticates = new Authenticator(web)
    this.checks = new Checker(web)
    this.executes = new Executor(web)
}