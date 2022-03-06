const fs = require('fs-extra')
const path = require('path')
const m = global.msgs
const lang = global.settings.lang
const w = global.words
module.exports = function Downloader(web){
    this.data = function(session, params, req, res){
        if(session.user != null && session.user.id != null){
            var param = params[0]
            param = path.resolve(param)
            var items = param.split('/')
            var filename = items[items.length-1]
            if(fs.existsSync(param) && !fs.lstatSync(param).isDirectory()){
                res.setHeader('Content-Disposition', 'attachment; filename='+filename)
                web.sys.writes.file.byStream(param,'application/octet-stream',res)
            }
        }else{
            session.app.status = w[32]
            session.app.msg = m[lang][w[32]][0]
            web.sys.writes.view.toClient(session,res)
        }
    }
}