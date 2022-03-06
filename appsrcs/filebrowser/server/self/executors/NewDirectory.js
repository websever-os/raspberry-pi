module.exports = function NewDirectory(web){
    this.onServer = function(session){
        session.app.filebrowser.self.operates.newDirectory(session)
    }
    this.onClient = function(session){
        session.app.data.cmd = 'web.app.filebrowser.self.executes.newDirectory.onClient'
        web.socket.sends.data.toAll(session,'id')
    }
}