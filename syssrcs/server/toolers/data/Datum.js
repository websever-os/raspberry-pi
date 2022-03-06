module.exports = function Datum(web){
    let Copy = require('./Copy')
    let Hash = require('./Hash')
    let Make = require('./Make')
    this.toCopy = new Copy(web)
    this.toHash = new Hash(web)
    this.toMake = new Make(web)
}