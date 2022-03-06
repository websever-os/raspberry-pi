const fs = require('fs')

module.exports = function Copy(web){
    this.file = function(destination, source){
        var flag = false
        if(!web.sys.checks.path(destination)){
            try{
                fs.copyFileSync(source,destination)
                console.log('Copy: '+destination)
                flag = true
            }catch(err){
                console.log('Copy: copyFileSync does not work.')
                console.log(err)
            }
            try{
                if(!flag){
                    fs.writeFileSync(destination, fs.readFileSync(source))
                    console.log('Copy: '+destination)
                    flag = true
                }
            }catch(err){
                console.log('Copy of theme file is error.')
                console.log(err)
            }
        }
        return flag
    }
}