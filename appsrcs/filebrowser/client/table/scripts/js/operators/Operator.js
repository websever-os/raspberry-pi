web.app.filebrowser.src.table.operators.Operator = function(web){
    this.exit = new FilebrowserTableExitOperator(web)
    this.listing = new FilebrowserTableListOperator(web)
    this.loading = new FilebrowserTableLoadOperator(web)
    this.parade = new FilebrowserTableParadeOperator(web)
    this.selection = new FilebrowserTableSelectionOperator(web)
    this.setting = new FilebrowserTableSetOperator(web)
    this.clearance = function(event){
		$('.contextmenu').remove()
        $(event.target).find('td').blur()
        const trs = $(event.target).find('tr')
        const removeSelected = trs.map(function(idx, tag){
			web.app.filebrowser.table.operates.selection.toSetOff($(tag))
		})
		Promise.all(removeSelected)
	}
}