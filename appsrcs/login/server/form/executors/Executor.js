module.exports = function Executor(web){
    this.authentication = function(session){
        session.app.login.form.authenticates.user(session)
    }
    this.success = async function(session){
        const app = session.app
        await app.login.form.checks.user.dir(session)
        app.data = new web.Data(session)
        app.data.info.user = session.user
        app.data.cmd = 'web.app.login.form.executes.success'
        web.socket.sends.data.toSelf(session)
    }
    this.failure = function(session){
        const app = session.app
        app.data = new web.Data(session)
        app.data.cmd = 'web.app.login.form.executes.failure'
        web.socket.sends.data.toSelf(session)
    }
    this.check = function(session){
        if(session.user != null){
            session.app.data.cmd = 'web.app.login.form.executes.redirect'
            web.socket.sends.data.toSelf(session)
        }
    }
}