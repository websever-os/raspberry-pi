const m = global.msgs
const w = global.words
const lang = global.settings.lang

module.exports = function Data(web){
    this.toClient = function(session, res){
        const app = session.app
        if(app.file.path != null && web.sys.checks.path(app.file.path)){
            if(web.sys.checks.url.forCustom.data(session)){
                by_text(session,res)
            }else{
                by_stream(session,res)
            }
            app.status = w[31]
        }else{
            app.status = w[33]
            app.msg = m[lang][404][7]
            console.log('err : '+m[lang][404][7])
            console.log('path: '+app.file.path)
        } 
    }
    const by_text = function(session, res){
        const app = session.app
        web.sys.writes.file.byText(app.file.text,app.file.type,res)
    }
    const by_stream = function(session, res){
        const app = session.app
        web.sys.writes.file.byStream(app.file.path,app.file.type,res)
    }
}