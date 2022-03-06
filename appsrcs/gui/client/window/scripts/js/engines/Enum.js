web.app.gui.src.window.engines.Enum = function(web){
    this.lastZ = 0
    this.lastID = 0
    this.nodes = new WindowNode()
	this.focuses = function(node){
        var flag = false
        let jQObj = node.win.view.jQObj
        if(!node.win.screen.isTop){
            flag = true
			var z = jQObj.css("z-index")
            var tmpNode = this.nodes.next
            this.nodes.top.win.screen.isTop = false
            while (tmpNode instanceof WindowNode){
                var tmpZ = tmpNode.win.getsZIndex()
                if(tmpZ > z){
                    tmpNode.win.setsZIndex(tmpZ-1)
                }else if(tmpZ == z){
                    tmpNode.win.setsZIndex(this.lastZ)
                    tmpNode.win.screen.isTop = true
                    this.nodes.top = tmpNode
                }
                tmpNode = tmpNode.next
            }
        }
        return flag
    }
    this.recovers = function(win){
        var node = this.nodes
        var tmpNode = null
        while (node instanceof WindowNode){
            if(node.next == null){
                tmpNode = new WindowNode()
                tmpNode.win = win
                this.nodes.last = tmpNode
                node.next = tmpNode
                tmpNode.prev = node
                node = tmpNode.next
            }else
                node = node.next
        }
        if(this.lastZ < win.z.onScreen){
            this.lastZ = win.z.onScreen
            this.nodes.top = tmpNode
        }
        if(this.lastID < win.id)
            this.lastID = win.id
        win.setsZIndex(win.z.onScreen)
        return tmpNode
    }
    this.adds = function(win){
        var tmpNode = new WindowNode()
        this.lastZ++
        this.lastID++
        tmpNode.win = win
        tmpNode.win.id = this.lastID
        win.setsZIndex(this.lastZ)
        if(this.nodes.last != null){
            this.nodes.last.next = tmpNode
            tmpNode.prev = this.nodes.last
            this.nodes.last = tmpNode
            if(this.nodes.top != null)
                this.nodes.top.win.screen.isTop = false
            this.nodes.top = tmpNode
        }else{
            this.nodes.next = tmpNode
            this.nodes.last = tmpNode
            this.nodes.top = tmpNode
            tmpNode.prev = this.nodes
        }
        return tmpNode
    }
    this.restoresFromMin = function(node){
        var z = ++this.lastZ
        node.win.setsZIndex(z)
        if(this.nodes.top != null) 
			this.nodes.top.win.screen.isTop = false
		this.nodes.top = node
		node.win.screen.isOn = true
        node.win.screen.isTop = true
    }
    this.setsTop = function(){
        var z = --this.lastZ
        if(z <= 0)
            this.nodes.top = null
        else{
            var tmpNode = this.nodes.next
            while (tmpNode instanceof WindowNode){
                var tmpZ = tmpNode.win.getsZIndex()
                if(tmpZ == z){
                    tmpNode.win.screen.isTop = true
                    this.nodes.top = tmpNode
                }
                tmpNode = tmpNode.next
            }
        }
    }
    this.closes = function(){
        var tmpNode = this.nodes.top
		tmpNode.win.view.jQObj.remove()
        if(tmpNode.prev.prev == null && tmpNode.next == null){
            this.nodes.last = null
            this.nodes.next = null
            this.nodes.top = null
        }else if(tmpNode.next != null){
            tmpNode.prev.next = tmpNode.next
            tmpNode.next.prev = tmpNode.prev
        }else if(tmpNode.next == null){
            this.nodes.last = tmpNode.prev
            tmpNode.prev.next = null
        }
        this.setsTop()
		return tmpNode
    }
    this.minimizes = function(){
        this.nodes.top.win.screen.isOn = false
        this.nodes.top.win.screen.isTop = false
        this.nodes.top.win.setsZIndex(0)
        this.setsTop()
    }
    this.finds = function(id){
        var tmpNode = this.nodes.next
        while (tmpNode instanceof WindowNode){
            if(tmpNode.win.id == id) return tmpNode
            tmpNode = tmpNode.next
        }
    }
}