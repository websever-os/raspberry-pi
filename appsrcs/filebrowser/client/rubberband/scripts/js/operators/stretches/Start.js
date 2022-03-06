web.app.filebrowser.src.rubberband.operators.stretches.Start = function(web){
    this.normally = function(divJQObj,winJQObj,event){
        if(this.toInit(event)){
            web.app.filebrowser.rubberband.engine.starts(divJQObj,winJQObj,event)
            web.app.filebrowser.table.operates.clearance(event)
        }
    }
    this.withCtrl = function(divJQObj,winJQObj,event){
        if(this.toInit(event)){
            web.app.filebrowser.rubberband.engine.starts(divJQObj,winJQObj,event)
            this.trs.removeClass("ctrl")
        }
    }
}