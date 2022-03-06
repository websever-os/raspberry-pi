const path = require('path')
const View = require('./models/View')
const m = global.msgs
const w = global.words
const lang = global.settings.lang


module.exports = function App(web){
    this.withName = function(session){
        const app = session.app
        if(web.sys.checks.app.status(session))
            web.sys.reads.view.ofApp(session,false)
        app.data = new web.Data(session)
        if(app.status == w[33]) app.data.info.view = app.msg
        else{
            app.data.info.view = app[app.name].view.data
            app.data.info.appname = app.name
        } 
        web.sys.executes.response(session)
    }
    this.withCMD = function(session){
        web.sys.checks.app.status(session)
    }
}