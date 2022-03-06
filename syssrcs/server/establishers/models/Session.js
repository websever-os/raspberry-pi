const App = require('../../../App')
module.exports = function Session(web, hash){
    this.app = new App(web)
    this.user = null
    this.hash = hash
    this.secSocketKey = null
    this.time = {
        ofTheLast:null,
        ofTheEnd:null,
        out:null
    }
}