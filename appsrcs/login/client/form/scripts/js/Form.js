web.app.login.src.form.Form = function(web){
    this.controls = new Controller(web)
    this.executes = new Executor(web)
    this.event = new Event(web)
    this.operates = new Operator(web)
}