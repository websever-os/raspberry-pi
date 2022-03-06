module.exports = function Tooler(web){
    let Datum = require("./data/Datum")
    this.datum = new Datum(web)
}