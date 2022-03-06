web.app.gui.src.bar.views.View = function(web){
    this.img = function(){
        var div = $("<img>")
        this.imgJQObj = div
    }
    this.outer = function(){
        var div = $("<div></div>")
        div.addClass("bar")
        div.addClass("id")
        this.outerJQObj = div
    }
    this.img()
    this.outer()
    this.outerJQObj.append(this.imgJQObj)
    this.jQObj = this.outerJQObj
}