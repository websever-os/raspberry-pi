web.app.gui.src.menubar.operators.Operator = function(web){
    this.menuJQObj = null
    this.inOn = false
    this.logout = function(event){
        web.app.gui.menubar.executes.logout()
    }
    this.menu = function(event){
        if(this.menuJQObj == null){
            this.menuJQObj = web.app.gui.menubar.view.jQObj
            web.app.gui.menubar.event.ofMenu(web.app.gui.menubar.view)
        }
            
        if(!this.isOn){
            $('#background').append(this.menuJQObj)
            this.isOn = true
        }else{
            this.menuJQObj.remove()
            this.isOn = false
        }
    }
}