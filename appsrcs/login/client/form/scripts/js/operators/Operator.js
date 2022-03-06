web.app.login.src.form.operators.Operator = function(web){
    this.msg = function(code, flag, msg){
        const msgNode = $("p.msg")[code]
        if(msgNode.innerHTML != "") msgNode.innerHTML = ""
        if(!flag)
            switch(code) {
                case 0:
                    msgNode.innerHTML = msg
                    break
                case 1:
                    msgNode.innerHTML = msg
                    break
        }
    }
    this.submission = function(){
        var idFlag = false
        var pwFlag = false
		const id = $('input')[0].value.trim()
		const password = $('input')[1].value
        if(id != '') idFlag = true
        this.msg(0,idFlag,"ID is blank.")
        if(password != '') pwFlag = true
        this.msg(1,pwFlag,"Password is blank.")
        if(idFlag && pwFlag){
            const info = {}
            info.id = id
            info.password = password
            web.app.login.form.executes.submission(info)
        }
    }
}