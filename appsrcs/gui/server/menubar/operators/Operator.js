module.exports = function Operator(web){
    this.logout = function(session){
        session.app.gui.menubar.executes.redirect(session)
        const hash = session.hash
        delete web.sessions[hash]
        delete web.apps[hash]
        delete web.sockets[hash]
        web.users[session.user.id].remove(hash)
        if(Object.keys(web.users[session.user.id]).length == 0)
            delete web.users[session.user.id]
    }
}