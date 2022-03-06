web.app.filebrowser.src.table.operators.Selection = function(web){
    this.normally = function(event){
        $('.contextmenu').remove()
		const table = $(event.target).closest('table')
		const tr = $(event.target).closest('tr')
		const removeSelected = table.find('.selected').map(function(idx, tag){
			web.app.filebrowser.table.operates.selection.toSetOff($(tag))
		})
		Promise.all(removeSelected)
		this.toSetOn(tr)
    }
	this.withInput = function(event){
		$('.contextmenu').remove()
		const tr = $(event.target).closest('tr')
		if(tr.hasClass('selected'))
			tr.removeClass('selected')
		else
			tr.addClass('selected')
	}
    this.withCtrlKey = function(event){
        $('.contextmenu').remove()
		const tr = $(event.target).closest('tr')
		if(tr.hasClass('selected'))
			this.toSetOff(tr)
		else
			this.toSetOn(tr)
    }
    this.toSetOn = function(tr){
		tr.addClass('selected')
		tr.find('input').attr('checked',true)
		tr.find('input').prop('checked',true)
	}
    this.toSetOff = function(tr){
        tr.removeClass('selected')
		tr.find('input').removeAttr('checked')
		tr.find('input').prop('checked',false)
    }
}