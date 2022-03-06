module.exports = function Redirect(web){
    this.toLogin = function(session){
        const app = session.app
        app.data = new web.Data(session)
        app.data.cmd = 'web.app.gui.desktop.executes.redirect.toLogin'
        web.socket.sends.data.toSelf(session)
    }
}