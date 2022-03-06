module.exports = function Paver(web){
    let Path = require('./paths/Path')
    let URL = require('./urls/URL')
    this.path = new Path(web)
    this.url = new URL(web)
}