web.app.gui.src.window.models.Model = function(){
    this.view = new web.app.gui.window.View()
    this.view.__proto__ = this
	this.id = 0
    this.icon = null
	this.type = {
        resize:true,
        head:true,
        body:true,
        move:true,
        xButton:true,
        maxButton:true,
        minButton:true,
        head:true,
        resize:true,
        enum:true,
        iframe:false
    }
    this.screen = {
        isOn:true,
        isTop:true,
        isMax:false
    }
    this.left = {
        onScreen:null,
        beforeMax:null,
        beforeMin:null
    }
    this.top = {
        onScreen:null,
        beforeMax:null,
        beforeMin:null
    }
    this.width = {
        onScreen:null,
        beforeMax:null,
        beforeMin:null
    }
    this.height = {
        onScreen:null,
        beforeMax:null,
        beforeMin:null
    }
    this.z = {
        onScreen:null,
        beforeFocus:null
    }
    this.classOf = {
        n:'win-n-resize',
        w:'win-w-resize',
        e:'win-e-resize',
        s:'win-s-resize',
        nw:'win-nw-resize',
        ne:'win-ne-resize',
        sw:'win-sw-resize',
        se:'win-se-resize',
        button:'win-button',
        move:'win-move',
		drag:'win-drag',
        body:'win-body',
        head:'win-head',
        outer:'win-outer',
		enum:'enum',
        row:'win-row-side',
        col:'win-col-side',
        edge:'win-edge',
		max:'win-max',
		min:'win-min',
		x:'win-x',
        title:'win-title',
        id:'id'
    }
	this.setsZIndex = function(idx){
        this.view.jQObj.css('z-index',idx)
    }
    this.getsZIndex = function(){
        return this.view.jQObj.css('z-index')
    }
    this.setsPosition = function(info){
        this.view.jQObj.css({left:info.left.onScreen,top:info.top.onScreen})
    }
    this.getsLeft = function(){
        return this.view.jQObj.position().left
    }
    this.getsTop = function(){
        return this.view.jQObj.position().top
    }
    this.getsWidth = function(){
        return this.view.jQObj.width()
    }
    this.getsHeight = function(){
        return this.view.jQObj.height()
    }
	this.setsID = function(id){
		this.id = id
		this.view.jQObj.attr('id',id)
	}
    this.setsTitle = function(title){
        this.view.titleJQObj.html(title)
    }
	this.setsType = function(type){
		this.type = type
	}
    this.setsRecovery = function(info){
        this.id = info.id
        this.icon = info.icon
        this.appname = info.appname
        this.screen = info.screen
        this.left = info.left
        this.top = info.top
        this.z = info.z
        this.width = info.width
        this.height = info.height
    }
    this.getsContentView = function(){
        return this.view.bodyJQObj.html()
    }
    this.setsContentView = function(view){
        this.view.bodyJQObj.html(view)
    }
}