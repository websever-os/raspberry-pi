web.app.filebrowser.src.table.operators.List = function(web){
    this.selectedData = function(table, path){
		const selects = table.find(".selected")
        const names = selects.find(".name")
		web.app.gui.selectedData = []
		if(names.length != 0){
			const sMap = selects.map(function(idx, elem){
				const jQObj = $(elem)
				web.app.gui.selectedData[idx] = []
				web.app.gui.selectedData[idx] = jQObj.children(".name").text()
			})
			Promise.all(sMap)
		}
        if(path !== undefined)
            web.app.gui.selectedData.unshift(path)
    }
}