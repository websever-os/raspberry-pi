module.exports = function Executor(web){
    this.logout = function(session){
        session.app.gui.menubar.operates.logout(session)
    }
    this.redirect = function(session){
        session.app.data = new web.Data(session)
        session.app.data.cmd = 'web.app.gui.menubar.executes.redirect'
        web.socket.sends.data.toSelf(session)
    }
}