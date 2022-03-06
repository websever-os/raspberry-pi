web.app.filebrowser.src.winContentDiv.operators.sets.Set = function(web){
    this.ofEvent = function(info){
        let win = $('#'+info.id+'.window')
        web.app.filebrowser.winContentDiv.event.forDiv(win)
    }
}