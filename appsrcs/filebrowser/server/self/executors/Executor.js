module.exports = function Executor(web){
    let Copy = require('./Copy')
    let Cut = require('./Cut')
    let Delete = require('./Delete')
    let Initialization = require('./Initialization')
    let NewDirectory = require('./NewDirectory')
    let Rename = require('./Rename')
    let Upload = require('./Upload')
    this.copy = new Copy(web)
    this.cut = new Cut(web)
    this.delete = new Delete(web)
    this.init = new Initialization(web)
    this.newDirectory = new NewDirectory(web)
    this.rename = new Rename(web)
    this.upload = new Upload(web)
}