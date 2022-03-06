const http = require("http")

module.exports = function HTTP(){
    this.createServer = function(callback){
        this.server = http.createServer(callback)
    }
}

