module.exports = function User(web){
    this.check = function(session){
        const app = session.app
        if(session.user == null){
            app.gui.desktop.executes.redirect.toLogin(session)
        }else if(session.user.auth){
            if(session.app.nodes !== undefined)
                app.gui.window.engine.ofEnum.nodes = session.app.nodes
            app.gui.desktop.executes.init.task(session)
        }
    }
}