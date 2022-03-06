web.app.filebrowser.src.contextmenu.views.Div = function(web){
	this.newDirectoryJQObj = $("<div>New Directory</div>")
	this.pasteJQObj = $("<div>Paste</div>")
	this.uploadJQObj = $("<div>Upload</div>")
	this.outer = function(){
		var div = $("<div></div>")
		div.addClass("filebrowser")
		div.addClass("contextmenu")
		div.append(this.pasteJQObj)
		div.append(this.newDirectoryJQObj)
		//div.append(this.uploadJQObj)
		this.outerJQObj = div
	}
	this.outer()
	this.jQObj = this.outerJQObj
}
