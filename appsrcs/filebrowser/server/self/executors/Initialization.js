const path = require('path')
module.exports = function Initialization(web){
    this.task = async function(session){
        const app = session.app
        let dPath = path.resolve(app.data.info.path)
        app.data.info.list = await app.filebrowser.table.operates.loading.directory(session)
        app.data.cmd = 'web.app.filebrowser.self.executes.init.completion'
        web.socket.sends.data.toAll(session,'id')
    }
}