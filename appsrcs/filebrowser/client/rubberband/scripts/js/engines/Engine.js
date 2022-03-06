web.app.filebrowser.src.rubberband.engines.Engine = function(web){
	this.standard = null
	this.tagUnderRing = null
	this.starts = function(tagUnderRing,standard,event){
		this.direction = null
		this.tagUnderRing = tagUnderRing
		this.standard = standard
		this.ring = $("<div></div>")
		this.ring.addClass("rubberband")
		this.stdX = event.clientX - this.standard.offset().left
		this.stdY = event.clientY - this.standard.offset().top
		this.ring.css({
			position:"absolute",
			left:this.stdX,
			top:this.stdY
		})
		this.tagUnderRing.append(this.ring)
	}
	this.works = function(event){
		var x = event.clientX - this.standard.offset().left
		var y = event.clientY  - this.standard.offset().top
		var width = this.stdX - x
		var height = this.stdY - y
		// SE
		if(width < 0 &&  height <0){
			width = -width
			height = -height
		}// NW
		else if(width > 0 &&  height > 0){
			this.ring.offset({
				left:x + this.standard.offset().left,
				top:y + this.standard.offset().top
			})
		}// NE
		else if(width < 0 &&  height > 0){
			width = -width
			this.ring.offset({
				top:y + this.standard.offset().top
			})
		}//SW
		else if(width > 0 &&  height < 0){
			this.ring.offset({
				left:x + this.standard.offset().left
			})
			height = -height;
		}
		this.ring.width(width)
		this.ring.height(height)
	}
	this.ends = function(){
		if(this.tagUnderRing !== undefined)
			this.tagUnderRing.find(".rubberband").remove()
	}
}
