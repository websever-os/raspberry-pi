module.exports = function App(web){
    let Form = require('./form/Form')
    this.form = new Form(web)
}