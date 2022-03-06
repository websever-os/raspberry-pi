const path = require('path')
const m = global.msgs
const w = global.words
const lang = global.settings.lang
const View = require('../loaders/models/View')

module.exports = function App(web){
    this.status = function(session){
        const app = session.app
        let flag = false
        if(app.name != null){
            flag = true
            let aDirPath = path.join(web.sys.path.ofAppsrcs,app.name)
            let aPath = null
            let aFilePath = null
            let view = null
            let viewsJSON = null

            //check app dir
            if(web.sys.checks.path(aDirPath)){
                aPath = web.sys.paves.path.ofApp.forInit(aDirPath)
                aFilePath = path.join(aPath.ofServer,w[29])
            }else{
                flag = false
                app.msg = m[lang][w[33]][0]
            }

            //check app.js file
            if(flag)
            if(web.sys.checks.path(aFilePath)){
                const App = require(path.join(aFilePath))
                app[app.name] = new App(web)
                app[app.name].path = aPath
                app[app.name].url = web.sys.paves.url.ofPublic.forInit(session)
                app[app.name].views = []
                app[app.name].view = new View()
                view = app[app.name].view
            }else{
                flag = false
                app.msg = m[lang][w[33]][6]
            }

            //check views.json file
            if(flag)
            if(web.sys.checks.path(app[app.name].path.ofViewsJSON)){
                app[app.name].viewsJSON = web.sys.reads.json(app[app.name].path.ofViewsJSON)
                viewsJSON = app[app.name].viewsJSON
            }else{
                flag = false
                app.msg = m[lang][w[33]][1]
            }

            //check View
            if(flag)
            if(session.urls == null && viewsJSON[w[6]] !== undefined){
                view.name = viewsJSON[w[6]]
                web.sys.paves.path.ofView.forInit(session)
            }else if(session.urls != null && viewsJSON[session.urls[0]] === undefined && viewsJSON[w[6]] !== undefined){
                view.name = viewsJSON[w[6]]
                web.sys.paves.path.ofView.forInit(session)
            }else if(viewsJSON[w[6]] === undefined){
                app.msg = m[lang][w[33]][2]
                flag = false
            }else{
                view.name = session.urls[0]
                web.sys.paves.path.ofView.forInit(session)
            }

            if(flag) app.status = w[30]
            else app.status = w[33]

            return flag
        }
    }
}