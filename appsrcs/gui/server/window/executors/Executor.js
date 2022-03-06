module.exports = function Executor(web){
    this.sheltering = function(session){
        session.app.gui.window.operates.sheltering(session)
    }
    this.synchronization = function(session){
        const app = session.app
        app.data.cmd = 'web.app.gui.window.executes.synchronization'
        web.socket.sends.data.toOther(session,'id')
    }
}