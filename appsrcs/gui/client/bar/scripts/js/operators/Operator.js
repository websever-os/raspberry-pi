web.app.gui.src.bar.operators.Operator = function(web){
    this.newBar = function(node, icon){
        let bar = new web.app.gui.bar.Model()
        bar.setsID(node.win.id)
        bar.setsImg(icon.img)
        $('#barzone').append(bar.view.jQObj)
        web.app.gui.bar.event.init(bar)
    }
    this.recovery = function(info){
        let bar = new web.app.gui.bar.Model()
        bar.setsID(info.id)
        bar.setsImg(info.icon.img)
        $('#barzone').append(bar.view.jQObj)
        web.app.gui.bar.event.init(bar)
    }
    this.closing = function(node){
        $('div#'+node.win.id+'.bar').remove()
    }
}