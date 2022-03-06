const crypto = require('crypto')
const fs = require('fs')
module.exports = function Tooler(web){
    this.file = function(path){
        return crypto.createHash('md5').update(fs.readFileSync(path)).digest('hex')
    }
}