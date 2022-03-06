const fs = require('fs')

module.exports = function File(web){
    this.byText = function(text, type, res){
        res.setHeader('Content-Type',type)
        res.end(text)
    }
    this.byStream = function(path, type, res){
        res.setHeader('Content-Type',type)
        const readStream = fs.createReadStream(path)
        readStream.on('open',function(){
            readStream.pipe(res)
        })
        readStream.on('error',function(err){
            res.end(err)
        })
    }
}