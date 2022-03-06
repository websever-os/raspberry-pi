web.app.filebrowser.src.contextmenu.views.Table = function(web){
	this.newDirectoryJQObj = $("<div>New Directory</div>")
	this.renameJQObj = $("<div>Rename</div>")
	this.copyJQObj = $("<div>Copy</div>")
	this.cutJQObj = $("<div>Cut</div>")
	this.pasteJQObj = $("<div>Paste</div>")
	this.deleteJQObj = $("<div>Delete</div>")
	this.downloadJQObj = $("<div>Download</div>")
	this.shareJQObj = $("<div>Share</div>")
	this.uploadJQObj = $("<div>Upload</div>")
	this.outer = function(){
		var div = $("<div></div>")
		div.addClass("filebrowser")
		div.addClass("contextmenu")
		div.append(this.copyJQObj)
		div.append(this.cutJQObj)
		div.append(this.pasteJQObj)
		div.append(this.newDirectoryJQObj)
		div.append(this.renameJQObj)
		div.append(this.deleteJQObj)
		//div.append(this.shareJQObj)
		//div.append(this.uploadJQObj)
		div.append(this.downloadJQObj)
		this.outerJQObj = div
	}
	this.outer()
	this.jQObj = this.outerJQObj
}
