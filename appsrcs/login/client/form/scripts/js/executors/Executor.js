web.app.login.src.form.executors.Executor = function(web){
    this.init = function(){
        web.app.login.form.event.init()
    }
    this.submission = function(info){
        web.sys.adjusts.effect.ofProcess.toAppend('section','Login')
        web.socket.data.cmd = "web.app.login.form.executes.authentication"
		web.socket.data.info = info
		web.socket.sends.data()
    }
    this.success = function(info){
        console.log('success')
        web.sys.adjusts.effect.ofProcess.toRemove()
        window.location.replace('/gui')
    }
    this.failure = function(info){
        console.log('failure')
        web.sys.adjusts.effect.ofProcess.toRemove()
        web.app.login.form.operates.msg(1,false,"Authentication failure.<br>Please enter your ID and password correctly.")
    }
}