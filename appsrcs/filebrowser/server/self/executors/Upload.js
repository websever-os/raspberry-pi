module.exports = function Upload(web){
    this.onClient = function(session){
        session.app.data.cmd = 'web.app.filebrowser.self.executes.upload.onClient'
        web.socket.sends.data.toAll(session,'id')
    }
}