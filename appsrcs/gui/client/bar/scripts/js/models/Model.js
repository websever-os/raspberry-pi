web.app.gui.src.bar.models.Model = function(web){
    this.view = new BarView(web)
    this.setsID = function(id){
        this.view.jQObj.attr('id',id)
    }
    this.setsImg = function(src){
        this.view.imgJQObj.attr('src',src)
    }
}