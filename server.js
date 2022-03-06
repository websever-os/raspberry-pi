global.msgs = require('./syssrcs/rules/jsons/msgs.json')
global.settings = require('./syssrcs/rules/jsons/settings.json')
global.words = require('./syssrcs/rules/jsons/words.json')
const m = global.msgs
const lang = global.settings.lang
const w = global.words
let Web = require('./Web')
const web = new Web()
web.init(__dirname)
web.server.listen(3000,3001,function (req, res){
    const session = web.sys.establishes.session.toGet(req)
    web.sys.checks.url.toSplit(session,req)
    if(web.sys.checks.url.toCall(session)){
        web.sys.reads.method(session,req,res)
    }else{
        web.sys.checks.url.forName(session)
        if(web.sys.checks.url.forStaticFile(session) && web.sys.checks.url.forSecurity(session)){
            web.sys.reads.url.forStaticFile(session)
            web.sys.writes.data.toClient(session,res)
        }else if(web.sys.checks.app.status(session))
            web.sys.reads.view.ofApp(session,true)
        web.sys.writes.view.toClient(session,res)
    }
})
web.socket.listens(function(socket, req){
    const session = web.sys.establishes.session.toGet(req)
    if(web.sockets[session.hash] === undefined)
        web.sockets[session.hash] = []
    web.sockets[session.hash][req.headers['sec-websocket-key']] = {socket:socket,isDesktopMode:false}
    socket.onmessage = function(msg){
        session.secSocketKey = req.headers['sec-websocket-key']
        let data = JSON.parse(msg.data)
        try{
            web.sockets[session.hash][req.headers['sec-websocket-key']].isDesktopMode = data.isDesktopMode
            web.sys.executes.cmd(data)
        }catch(err){
            console.log('File: /ws-os/syssrcs/server/executors/Executor.js')
            console.log('eval error in Executor.js')
            console.log(err)
            console.log(data)
            web.sys.executes.error(session,w[35],m[lang][w[35]][0])
        }
    }
})