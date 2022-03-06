web.sys.srcs.executors.Executor = function(web){
    this.cmd = function(data){
        if(data.cmd != null && data.cmd != ''){
            try{
                web.app.data = data
                eval(data.cmd+'(data.info)')
            }catch(err){
                console.log('Error: ',data.cmd)
                setTimeout(function(){
                    web.sys.executes.cmd(data)
                },1000)
            }
		}
    }
    this.app = function(path){
        web.socket.data = new web.Data()
        web.socket.data.cmd = 'web.sys.excutes.app'
        web.socket.data.info = {path:path}
		web.socket.sends.data()
    }
    this.response = function(info){
        eval(web.sys.response+'(info)')
    }
    this.error = function(info){
        $('body').html(info.status+' '+info.msg)
    }
    this.console = {}
    this.console.log = function(log){
        web.socket.data = new web.Data()
        web.socket.data.cmd = 'web.sys.excutes.console.log'
        web.socket.data.info = {log:log}
		web.socket.sends.data()
    }
}