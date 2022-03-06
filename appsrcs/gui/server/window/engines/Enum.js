module.exports = function Enum(web){
    const Node = require('../models/Node')
    this.nodes = new Node()
    this.focuses = function(info){
        var z = info.z.beforeFocus
        var tmpNode = this.nodes.next
        var lastZ = this.nodes.top.info.z.onScreen
        this.nodes.top.info.screen.isTop = false
        while (tmpNode instanceof Node){
            var tmpZ = tmpNode.info.z.onScreen
            if(tmpZ > z){
                tmpNode.info.z.onScreen = tmpZ-1
            }else if(tmpZ == z){
                tmpNode.info.z.onScreen = lastZ
                tmpNode.info.screen.isTop = true
                this.nodes.top = tmpNode
            }
            tmpNode = tmpNode.next
        }
    }
    this.adds = function(info){
        var tmpNode = new Node()
        tmpNode.info = info
        if(this.nodes.last != null){
            this.nodes.last.next = tmpNode
            tmpNode.prev = this.nodes.last
            this.nodes.last = tmpNode
            if(this.nodes.top != null)
                this.nodes.top.info.screen.isTop = false
            this.nodes.top = tmpNode
        }else{
            this.nodes.next = tmpNode
            this.nodes.last = tmpNode
            this.nodes.top = tmpNode
            tmpNode.prev = this.nodes
        }
    }
	this.updates = function(info){
        var tmpNode = this.nodes.next
        while (tmpNode instanceof Node){
            if(tmpNode.info.id == info.id)
                tmpNode.info = info
            tmpNode = tmpNode.next
        }
    }
    this.closes = function(){
        let lastZ = null
        let tmpNode = null
        tmpNode = this.nodes.top
        lastZ = tmpNode.info.z.onScreen
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
        this.setsTop(lastZ)
		return tmpNode
    }
    this.minimizes = function(){
        let lastZ = null
        if(this.nodes.top != null)
            lastZ = this.nodes.top.info.z.onScreen
        else lastZ = 1
        this.setsTop(lastZ)
    }
    this.restoresFromMin = function(info){
        var tmpNode = this.nodes.next
        while (tmpNode instanceof Node){
            if(tmpNode.info.id == info.id)
                this.nodes.top = tmpNode
            tmpNode = tmpNode.next
        }
    }
    this.setsTop = function(lastZ){
        var z = lastZ-1
        if(z == 0)
            this.nodes.top = null
        else{
            var tmpNode = this.nodes.next
            while (tmpNode instanceof Node){
                var tmpZ = tmpNode.info.z.onScreen
                if(tmpZ == z){
                    tmpNode.info.screen.isTop = true
                    this.nodes.top = tmpNode
                }
                tmpNode = tmpNode.next
            }
        }
    }
	this.getsJSON = function(){
        json = {}
		json.windows = []
		var tmpNode = this.nodes.next
		while (tmpNode instanceof Node){
            json.windows.push(tmpNode.info)
            tmpNode = tmpNode.next
        }
		return json
	}
    this.finds = function(id){
        var tmpNode = this.nodes.next
        while (tmpNode instanceof Node){
            if(tmpNode.info.id == id) return tmpNode
            tmpNode = tmpNode.next
        }
    }
}