web.app.gui.src.bar.events.Event = function(web){
    this.init = function(bar){
        bar.view.jQObj.on("click",function(event){
            web.app.gui.bar.controls.click.forSingle(event)
        })
    }
}