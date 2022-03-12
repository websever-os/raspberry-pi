web.app.gui.src.menubar.views.View = function(web){
    this.menu = function(){
        let div = $('<div></div>')
        div.attr('id','desktopMenu')
        this.menuJQObj = div
    }
    this.logout = function(){
        let div = $('<div></div>')
        div.html('Log out')
        this.logoutJQObj = div
    }
    this.menu()
    this.logout()
    this.menuJQObj.append(this.logoutJQObj)
    this.jQObj = this.menuJQObj
}