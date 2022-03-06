web.app.filebrowser.src.rubberband.operators.stretches.Work = function(web){
    this.normally = function(event){
        web.app.filebrowser.rubberband.engine.works(event)
        const select = this.trs.map(function(idx, tag){
			const tr = $(tag)
			const left = web.app.filebrowser.rubberband.engine.ring.offset().left
			const top = web.app.filebrowser.rubberband.engine.ring.offset().top
			const bottom = top + web.app.filebrowser.rubberband.engine.ring.height()
			const trRight = tr.offset().left + tr.outerWidth()
			const trTop = tr.offset().top
			const trBottom = tr.offset().top + tr.outerHeight()
			if(left < trRight)
			if(trTop > top && trTop < bottom && !tr.hasClass("selected")){
                web.app.filebrowser.table.operates.selection.toSetOn(tr)
			}else if(trBottom > top && trBottom < bottom && !tr.hasClass("selected")){
				web.app.filebrowser.table.operates.selection.toSetOn(tr)
			}else if(trTop < top && trBottom > bottom && !tr.hasClass("selected")){
				web.app.filebrowser.table.operates.selection.toSetOn(tr)
			}else if(trTop > bottom && tr.hasClass("selected")){
                web.app.filebrowser.table.operates.selection.toSetOff(tr)
			}else if(trBottom < top && tr.hasClass("selected")){
				web.app.filebrowser.table.operates.selection.toSetOff(tr)
			}
		})
		Promise.all(select)
    }
    this.withCtrl = function(event){
        web.app.filebrowser.rubberband.engine.works(event)
        const select = this.trs.map(function(idx, tag){
			const tr = $(tag)
			const left = web.app.filebrowser.rubberband.engine.ring.offset().left
			const top = web.app.filebrowser.rubberband.engine.ring.offset().top
			const bottom = top + web.app.filebrowser.rubberband.engine.ring.height()
			const trRight = tr.offset().left + tr.outerWidth()
			const trTop = tr.offset().top
			const trBottom = tr.offset().top + tr.outerHeight()
			if(left < trRight)
			if(trTop > top && trTop < bottom){
				if(!tr.hasClass("selected") && !tr.hasClass("ctrl")){
					web.app.filebrowser.table.operates.selection.toSetOn(tr)
					tr.addClass("ctrl")
				}else if(tr.hasClass("selected") && !tr.hasClass("ctrl")){
					web.app.filebrowser.table.operates.selection.toSetOff(tr)
					tr.addClass("ctrl")
				}
			}else if(trBottom > top && trBottom < bottom){
				if(!tr.hasClass("selected") && !tr.hasClass("ctrl")){
					web.app.filebrowser.table.operates.selection.toSetOn(tr)
					tr.addClass("ctrl")
				}else if(tr.hasClass("selected") && !tr.hasClass("ctrl")){
					web.app.filebrowser.table.operates.selection.toSetOff(tr)
					tr.addClass("ctrl")
				}
			}else if(trTop < top && trBottom > bottom){
				if(!tr.hasClass("selected") && !tr.hasClass("ctrl")){
					web.app.filebrowser.table.operates.selection.toSetOn(tr)
					tr.addClass("ctrl")
				}else if(tr.hasClass("selected") && !tr.hasClass("ctrl")){
					web.app.filebrowser.table.operates.selection.toSetOff(tr)
					tr.addClass("ctrl")
				}
			}else if(trTop > bottom){
				if(tr.hasClass("selected") && tr.hasClass("ctrl")){
					web.app.filebrowser.table.operates.selection.toSetOff(tr)
					tr.removeClass("ctrl")
				}else if(!tr.hasClass("selected") && tr.hasClass("ctrl")){
					web.app.filebrowser.table.operates.selection.toSetOn(tr)
					tr.removeClass("ctrl")
				}
			}else if(trBottom < top){
				if(tr.hasClass("selected") && tr.hasClass("ctrl")){
					web.app.filebrowser.table.operates.selection.toSetOff(tr)
					tr.removeClass("ctrl")
				}else if(!tr.hasClass("selected") && tr.hasClass("ctrl")){
					web.app.filebrowser.table.operates.selection.toSetOn(tr)
					tr.removeClass("ctrl")
				}
			}
		})
		Promise.all(select)
    }
}