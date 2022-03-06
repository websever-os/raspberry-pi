web.app.filebrowser.src.contextmenu.operators.Appearance = function(web){
	var tableEventIsOn = false
	var divEventIsOn = false
    this.forTable = function(event){
		web.app.filebrowser.event = event
		$('.rubberband').remove()
		let table = web.app.filebrowser.contextmenu.view.ofTable
        forFilebrowser(event,table.jQObj)
		if(!tableEventIsOn){
			tableEventIsOn = true
			web.app.filebrowser.contextmenu.event.forSelf(table,'TABLE')    
		}
    }
    this.forDiv = function(event){
		web.app.filebrowser.event = event
		$('.rubberband').remove()
		let div = web.app.filebrowser.contextmenu.view.ofDiv
        forFilebrowser(event,div.jQObj)
		if(!divEventIsOn){
			divEventIsOn = true
			web.app.filebrowser.contextmenu.event.forSelf(div,'DIV')    
		}
    }
    forFilebrowser = function(event, jQObj){
        $('.contextmenu').remove()
        const target = $(event.target)
		const table = target.closest('table')
		const path = table.find('.path')
		const tr = target.closest('tr')
		const trs = table.find('tr')
		if(tr.length && !tr.closest('thead').length  && !tr.hasClass('parent') && !tr.hasClass('selected')){
			trs.removeClass('selected')
			trs.find('input').removeAttr('checked')
			tr.addClass('selected')
			tr.find('input').attr('checked',true)
			tr.find('input').prop('checked',true)
		}else if(tr.closest('thead').length || tr.hasClass('parent')){
			trs.removeClass('selected')
			trs.find('input').removeAttr('checked')
			trs.find('input').prop('checked',false)
		}

        $('#desktop').append(jQObj)
        if(event.clientX + jQObj.width() <  window.innerWidth){
			jQObj.css('left',event.clientX)
			jQObj.css('right','')
		}else{
			jQObj.css('left','')
			jQObj.css('right',0)
		}
        if(event.clientY + jQObj.height() < window.innerHeight){
			jQObj.css('top',event.clientY)
			jQObj.css('bottom','')
		}else{
			jQObj.css('top','')
			jQObj.css('bottom',0)
		}
        web.app.filebrowser.table.operates.listing.selectedData(table,path.text())
    }
}