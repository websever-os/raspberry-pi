const crypto = require('crypto')
const SessionModel = require('./models/Session')
const MILLIS_OF_SEC = 1000
const LIMIT_SEC = 600
module.exports = function Session(web){
    this.toGet = function(req){
        const info = req.connection.remoteAddress + req.headers['user-agent']
        const hash = crypto.createHash('md5').update(info).digest('hex')
        var session = web.sessions[hash]
        if(session === undefined){
            session = this.toUpdate(new SessionModel(web,hash))
            //session.app.session = session
            web.apps[hash] = session.app
            //console.log('new')
        }else{
            session = this.toUpdate(session)
            //console.log('old')
        }
        return session
    }
    this.toUpdate = function(session){
        const LIMIT_TIME = MILLIS_OF_SEC * LIMIT_SEC
        const hash = session.hash
        web.sessions[hash] = session
        session.time.ofTheLast = new Date().getTime()
        session.time.ofTheEnd = session.time.ofTheLast + LIMIT_TIME
        if(session.time.out != null) clearTimeout(session.time.out)
        session.time.out = setTimeout(function(){
            if(session.time.ofTheEnd <= new Date().getTime()){
                clearTimeout(session.time.out)
                delete web.sessions[hash]
                delete web.apps[hash]
                delete web.sockets[hash]
                if(session.user != null && session.user.id != null){
                    web.users[session.user.id].remove(hash)
                    if(Object.keys(web.users[session.user.id]).length == 0)
                        delete web.users[session.user.id]
                }
                console.log('Session Deleted: '+hash)
            }
        },LIMIT_TIME)
        return session
    }
}