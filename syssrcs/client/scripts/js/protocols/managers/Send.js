web.sys.srcs.protocols.managers.Send = function(web){
    this.data = function(){
        const ws = web.socket
        if(ws.client.socket.readyState == 1){
            ws.data.hash = web.app.session.hash
            if(web.app.gui !== undefined)
                ws.data.isDesktopMode = web.app.gui.isDesktopMode
            ws.client.sends(JSON.stringify(ws.data))
        }else{
            ws.listens()
            sendingDataAfterConn_r(ws.data)
        }
		ws.data = new web.Data()
    }
    const sendingDataAfterConn_r = function(data){
        setTimeout(function(){
            const ws = web.socket
            if(ws.client.socket.readyState == 0)
                sendingDataAfterConn_r(data)
            else{
				ws.data = data
                ws.sends.data()
            }
        },1000)
    }
}