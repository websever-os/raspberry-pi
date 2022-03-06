module.exports = function Copy(web){
    this.onServer = function(session){
        session.app.filebrowser.self.operates.copy(session)
    }
    this.onClient = function(session){
        session.app.data.cmd = 'web.app.filebrowser.self.executes.copy.onClient'
        web.socket.sends.data.toAll(session,'id')
    }
}