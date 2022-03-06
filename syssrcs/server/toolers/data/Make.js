const fs = require('fs')

module.exports = function Make(web){
    this.directory = function(path){
        var flag = false
        if(!web.sys.checks.path(path)){
            try{
                fs.mkdirSync(path)
                console.log('Make: '+path)
                flag = true
            }catch(err){
                console.log('mErr: '+path)
                console.log(err)
            }
        }else flag = true
        return flag
    }
}