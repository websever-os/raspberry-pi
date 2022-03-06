const w = global.words

module.exports = function Custom(web){
    this.js = function(url, session){
        return session.app.file.url.includes(url.replace('?','.js?'))
    }
    this.css = function(url, session){
        return session.app.file.url.includes(url.replace('?','.css?'))
    }
    this.data = function(session){
        const app = session.app
        var flag = false
        if(app.file.url.includes(w[1])){
            app.file.text = web.sys.reads.text(app.file.path)
            if(app.file.url.includes(w[0])){
                web.sys.customizes.data(session)
            }else if(app[app.name][app[app.name].view.name].customizes != null){
                app[app.name][app[app.name].view.name].customizes.data(session)
            }
            flag = true
        }
        return flag
    }
}