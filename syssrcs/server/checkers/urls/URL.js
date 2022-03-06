const { unwatchFile } = require('fs')
const path = require('path')
const m = global.msgs
const lang = global.settings.lang
const w = global.words
const Custom = require('./Custom')

module.exports = function URL(web){
    this.forCustom = new Custom(web)
    this.toSplit = function(session, req){
        var urls = req.url.split('/')
        urls.shift()
        session.urls = urls
        session.url = req.url
    }
    this.toCall = function(session){
        let flag = false
        const urls = session.urls
        if(urls[0].includes('web.sys'))
            flag = true
        return flag
    }
    this.forName = function(session){
        const urls = session.urls
        if(urls[0] != w[23] && urls[0] != w[28])
            session.app.name = urls[0]
        urls.shift()
    }
    this.forStaticFile = function(session){
        var flag = false
		if(session.app.name != null && session.url.match(w[5])){
            flag = true
        } else {
            flag = false
        }
        return flag
    }
    this.forSecurity = function(session){
        const app = session.app
        var flag = false
        if(session.url.includes(path.posix.join(app.name,w[4]))
            || session.url.includes(path.posix.join(w[23],w[4]))
            || session.url.includes(w[28])){
            flag = true
        }else{
            app.status = w[32]
            app.msg = m[lang][w[32]][0]
        }
        return flag
    }
}