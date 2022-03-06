module.exports = function data(web){
    this.toSelf = function(session){
        const app = session.app
        console.log('Hash: '+app.data.hash)
		console.log('S->C: '+app.data.cmd)
        web.sockets[app.data.hash][session.secSocketKey].socket.send(JSON.stringify(app.data))
    }
    this.toOther = function(session, key){
        const app = session.app
        let userKey = session.user[key]
        let hashList = web.users[userKey]
        hashList.filter(function(element){
            return element !== session.hash
        }).forEach(function(hash){
            for(const [key, value] of Object.entries(web.sockets[hash])){
                if(value.isDesktopMode){
                    console.log('Hash: '+app.data.hash)
		            console.log('S->C: '+app.data.cmd)
                    if(value.socket.readyState == 1)
                        value.socket.send(JSON.stringify(app.data))
                    else delete web.sockets[hash][key]
                }
            }
        })
    }
    this.toAll = function(session, key){
        try{
            const app = session.app
            let userKey = session.user[key]
            let hashList = web.users[userKey]
            
            hashList.forEach(function(hash){
                for(const [key, value] of Object.entries(web.sockets[hash])){
                    if(value.isDesktopMode){
                        console.log('Hash: '+app.data.hash)
                        console.log('S->C: '+app.data.cmd)
                        if(value.socket.readyState == 1)
                            value.socket.send(JSON.stringify(app.data))
                        else delete web.sockets[hash][key]
                    }
                }
            })
        }catch(err){
            console.log(err)
        }
    }
}