module.exports = function Rename(web){
    this.onServer = function(session){
        session.app.filebrowser.self.operates.rename(session)
    }
    this.onClient = function(session){
        session.app.data.cmd = 'web.app.filebrowser.self.executes.rename.onClient'
        web.socket.sends.data.toAll(session,'id')
    }
}