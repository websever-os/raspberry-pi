web.app.login.src.form.events.Event = function(web){
    this.init = function(){
        $("div.submit").on("click",function(event){
			web.app.login.form.controls.mouse.forSingle.click()
		})
        $("input.id").on("keydown",function(event){
            if(event.which == 13)
                web.app.login.form.controls.key.forEnter.press()
		})
		$("input.password").on("keydown",function(event){
            if(event.which == 13)
                web.app.login.form.controls.key.forEnter.press()
		})
    }
}