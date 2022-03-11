web.app.gui.src.msg.operators.Operator = function(web){
    this.win = null
    this.tbodyJQObj = null
    this.msgs = []
    this.xAll = function(event){
        console.log('xAll')
        let trs = $('#msgWindow tbody').find('tr')
        trs.remove()
        this.msgs = []
    }
    this.x = function(event){
        const rowNum = $(event.target).parent().index()
        this.msgs.splice(rowNum/2,1)
        let trs = $('#msgWindow tbody').find('tr')
        trs.eq(rowNum).remove()
        trs.eq(rowNum+1).remove()
    }
    this.notice = function(info){
        let obj = Object.assign({}, info)
        this.msgs.unshift(obj)
        let msgButton = $("#msgButton")
		animation()
		function animation(){
			msgButton.animate({opacity:"0.2"},"slow")
			msgButton.animate({opacity:"1"},"slow",animation)
		}
    }
    const display = function(info){
        let tr0 = $('<tr></tr>')
        let timeTd = $('<td></td>')
        let xTd = $('<td>X</td>')
        let tr1 = $('<tr></tr>')
        let msgTd = $('<td></td>')
        xTd.addClass('x')
        msgTd.attr('colspan',2)
        msgTd.html(info.msg)
        let time = info.time
        if(time != null){
            time = new Date(time)
            time = time.getFullYear()+'-'+time.getMonth()+'-'+time.getDate()+' '+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()
        }
        timeTd.html(time)
        tr0.append(timeTd)
        tr0.append(xTd)
        tr1.append(msgTd)
        web.app.gui.msg.view.tbodyJQObj.append(tr0)
        web.app.gui.msg.view.tbodyJQObj.append(tr1)
        web.app.gui.msg.event.ofX(xTd)
    }
    this.window = function(event){
        let msgButton = $("#msgButton")
		msgButton.stop(true,true)
		msgButton.css("opacity","")
        if(this.win == null){
            newWin()
        }else if(this.win.screen.isOn){
            this.win.screen.isOn = false
            this.win.view.jQObj.remove()
        }else if(!this.win.screen.isOn){
            this.win.screen.isOn = true
            $('#background').append(this.win.view.jQObj)
        }

        if(this.win.screen.isOn && this.msgs.length){
            this.tbodyJQObj.empty()
            this.msgs.map(function(info){
                display(info)
            })
        }
    }
    const newWin = function(){
        let win = new web.app.gui.window.Model()
        web.app.gui.msg.operates.win = win
        win.type = {
            body:true,
            coordinate:false,
            enum:false,
            head:false,
            iframe:false,
            maxButton:false,
            minButton:false,
            move:false,
            resize:false,
            xButton:false
        }
        win.view.assembles()
        win.view.jQObj.attr('id','msgWindow')
        $('#background').prepend(win.view.jQObj)
        win.view.bodyJQObj.append(web.app.gui.msg.view.jQObj)
        web.app.gui.msg.operates.tbodyJQObj = web.app.gui.msg.view.tbodyJQObj
        web.app.gui.msg.view.xThJQObj.on('click',function(event){
            web.app.gui.msg.controls.xAll(event)
        })
    }
}