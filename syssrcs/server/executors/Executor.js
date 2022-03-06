module.exports = function Executor(web){
    const Data = require('../protocols/models/Data')
    this.cmd = function(data){
        console.log("Hash: "+data.hash)
        console.log("C->S: "+data.cmd)
        const session = web.sessions[data.hash]
        const app = session.app
        const cmds = data.cmd.split('.')
        cmds.shift()
        if(data.cmd == 'web.sys.excutes.app'){
            app.name = data.info.path
            web.sys.loads.app.withName(session)
        }else if(data.cmd == 'web.sys.excutes.console.log'){
            this.console.log(data)
        }else if(app !== undefined){
            if(app.name == null) app.name = cmds[1]
            web.sys.loads.app.withCMD(session)
            app.data = data
            eval(cmds.join('.')+'(session)')
        }
    }
    this.response = function(session){
        const app = session.app
        app.data.cmd = 'web.sys.executes.response'
        web.socket.sends.data.toSelf(session)
    }
    this.error = function(session, status, msg){
        const app = session.app
        app.data = new web.Data(session)
        app.data.info.status = status
        app.data.info.msg = msg
        app.data.cmd = 'web.sys.executes.error'
        web.socket.sends.data.toSelf(session)
    }
    this.console = {}
    this.console.log = function(data){
        console.log(data.info.log)
    }
}