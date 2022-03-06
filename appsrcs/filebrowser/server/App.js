module.exports = function App(web){
    this.nodes = []
    let Self = require('./self/Self')
    let Table = require('./table/Table')
    this.self = new Self(web)
    this.table = new Table(web)
}