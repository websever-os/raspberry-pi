module.exports = function Delete(web){
    this.onServer = function(session){
        session.app.filebrowser.self.operates.delete(session)
    }
    this.onClient = function(session){
        session.app.data.cmd = 'web.app.filebrowser.self.executes.delete.onClient'
        web.socket.sends.data.toAll(session,'id')
    }
}