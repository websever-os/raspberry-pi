web.app.gui.src.desktop.executors.Initialization = function(web){
    this.task = async function(info){
        web.user.id = info.id
        web.app.gui.json.icons = info.icons
        web.app.gui.json.windows = info.windows
        this.view()
    }
    this.view = async function(){
        web.app.gui.background.executes.init.task()
        await web.app.gui.icontable.executes.init.task()
        web.app.gui.msg.executes.init.task()
        web.app.gui.window.operates.recovery()
        web.sys.adjusts.effect.ofProcess.toRemove()
    }
}