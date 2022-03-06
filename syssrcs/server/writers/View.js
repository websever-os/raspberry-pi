module.exports = function View(web){
    this.toClient = function(session, res){
        const app = session.app
        if(app.status == 102) app.status = 200
        if(app.status == 200) web.sys.writes.html(app.status,app[app.name].view.data,res)
        if(app.status == 401 || app.status == 404) web.sys.writes.html(app.status,app.msg,res)
    }
}