web.app.filebrowser.src.rubberband.operators.stretches.Stretch = function(web){
    this.trs = null
    this.toStart = new FilebrowserRubberbandStretchStartOperator(web)
    this.toStart.__proto__ = this
    this.toWork = new FilebrowserRubberbandStretchWorkOperator(web)
    this.toWork.__proto__ = this
    this.toEnd = function(){
        web.app.filebrowser.rubberband.engine.ends()
        if(this.trs != null) this.trs.removeClass("ctrl")
		this.trs = null
    }
    this.toInit = function(event){
		var flag = false
		const target = $(event.target)
		if(target.prop("tagName") == "DIV" || "SECTION"){
			$(".contextmenu").remove()
			const trs = target.find("tbody").find("tr")
			this.__proto__.trs = trs.slice(1)
			const outer = target.closest(".win-outer")
			flag = true
		}
		return flag
	}
}