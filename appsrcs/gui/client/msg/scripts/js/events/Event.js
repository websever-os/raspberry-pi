web.app.gui.src.msg.events.Event = function(web){
    this.init = function(){
        const button = $('#msgButton')
        button.on('click',function(event){
            web.app.gui.msg.controls.window(event)
        })
    }
    this.ofX = function(jQObj){
        jQObj.on('click',function(event){
            web.app.gui.msg.controls.x(event)
        })
    }
}