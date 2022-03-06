const pam = require('authenticate-pam')
const User = require('./models/User')

module.exports = function Authenticator(web){
    this.user = function(session){
        const app = session.app
        const id = app.data.info.id
        const pw = app.data.info.password
        pam.authenticate(id, pw, function(err){
            var flag = false
            if(err){
                console.log('Client Session Hash: '+session.hash)
                console.log(err)
            }
            else{
                flag = true
            }
            if(flag){
                let user = new User()
                user.id = id
                user.auth = true
                session.user = user
                
                if(web.users[user.id] === undefined)
                    web.users[user.id] = []
                user = web.users[user.id]
                if(!user.includes(session.hash))
                    user.push(session.hash)
                session.app.nodes = web.sessions[user[0]].app.nodes

                app.login.form.executes.success(session)
            }else{
                app.login.form.executes.failure(session)
            }
        })
    }
}