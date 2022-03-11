module.exports = function Executor(web){
    this.sending = function(session){
        session.app.data.cmd = 'web.app.gui.msg.executes.receiving'
        web.socket.sends.data.toAll(session,'id')
    }
}