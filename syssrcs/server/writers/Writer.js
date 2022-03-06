
module.exports = function Writer(web){
    let Data = require('./Data')
    let File = require('./File')
    let View = require('./View')
    this.data = new Data(web)
    this.file = new File(web)
    this.view = new View(web)
    this.html = function(status, html, res){
        res.writeHead(status, {"Content-Type": "text/html"})
        res.write(html)
        res.end()
    }
}