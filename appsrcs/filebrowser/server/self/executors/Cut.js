module.exports = function Cut(web){
    this.onServer = function(session){
        session.app.filebrowser.self.operates.cut(session)
    }
    this.onClient = function(session){
        session.app.data.cmd = 'web.app.filebrowser.self.executes.cut.onClient'
        web.socket.sends.data.toAll(session,'id')
    }
}