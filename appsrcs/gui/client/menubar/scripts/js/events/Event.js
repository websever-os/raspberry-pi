web.app.gui.src.menubar.events.Event = function(web){
    this.init = function(){
        $('#menubar').on('click',function(event){
            web.app.gui.menubar.controls.button(event)
        })
    }
    this.ofMenu = function(view){
        view.logoutJQObj.on('click',function(event){
            web.app.gui.menubar.controls.logout(event)
        })
    }
}