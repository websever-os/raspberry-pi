module.exports = function Web(){
    let System = require('./syssrcs/System')
    let Protocol = require('./syssrcs/server/protocols/Protocol')
    this.Data = require('./syssrcs/server/protocols/models/Data')
    this.sys = new System(this)
    this.server = new Protocol(this)
    this.apps = []
    this.sessions = []
    this.socket = null
    this.sockets = []
    this.users = []
    this.init = function(rootDir){
        this.sys.words = global.words
        this.sys.path = this.sys.paves.path.ofSys.forInit(rootDir)
        this.sys.views = this.sys.reads.json(this.sys.path.ofViewsJSON)
        this.sys.msgs = global.msgs
        this.sys.lang = global.lang
    }
    this.users.__proto__.remove = function(hash){
        let index = this.indexOf(hash)
        if(index>-1) this.splice(index, 1)
    }
}