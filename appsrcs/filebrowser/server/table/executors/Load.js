const path = require('path')
module.exports = function Load(web){
    this.directory = async function(session){
        const app = session.app
        let dPath = path.resolve(app.data.info.path)
        app.data.info.path = dPath
        app.data.info.list = await app.filebrowser.table.operates.loading.directory(session)
        app.data.cmd = 'web.app.filebrowser.table.executes.parade.withID'
        web.socket.sends.data.toAll(session,'id')
    }
}