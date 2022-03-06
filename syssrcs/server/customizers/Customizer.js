const w = global.words
module.exports = function Customizer(web){
    this.data = function(session){
        const app = session.app
        if(web.sys.checks.url.forCustom.js(web.sys.views.syssrcs.js[7],session)){
            app.file.text = app.file.text.replace(w[2],session.hash)
        }
        if(web.sys.checks.url.forCustom.js(web.sys.views.syssrcs.js[14],session)){
            app.file.text = app.file.text.replace(w[2],session.hash)
        }
    }
}