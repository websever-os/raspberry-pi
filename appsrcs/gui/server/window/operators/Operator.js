module.exports = function Operator(web){
    this.sheltering = function(session){
        const app = session.app
        user = web.users[session.user.id]
        if(web.sessions[user[0]].app.nodes !== undefined)
            app.gui.window.engine.ofEnum.nodes = web.sessions[user[0]].app.nodes
        
        let info = app.data.info
        if(info.mode == 'focus'){
            app.gui.window.engine.ofEnum.focuses(info)
            app.data.info = {mode:info.mode,id:info.id}
        }else if(info.mode == 'add'){
            app.gui.window.engine.ofEnum.adds(info)
        }else if(info.mode == 'close'){
            app.gui.window.engine.ofEnum.closes(info)
            app.data.info = {mode:info.mode,id:info.id}
        }else if(info.mode == 'content'){
            let node = app.gui.window.engine.ofEnum.finds(info.id)
            if(node !== undefined)
                node.info.view = info.view
        }else{
            if(info.mode == 'min'){
                app.gui.window.engine.ofEnum.minimizes(info)
            }else if(info.mode == 'resMin'){
                app.gui.window.engine.ofEnum.restoresFromMin(info)
            }
            app.gui.window.engine.ofEnum.updates(info)
        }
        app.gui.window.executes.synchronization(session)
        delete info.mode
        web.sessions[user[0]].app.nodes = app.gui.window.engine.ofEnum.nodes
    }
}