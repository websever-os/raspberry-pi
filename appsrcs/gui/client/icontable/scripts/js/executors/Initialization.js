web.app.gui.src.icontable.executors.Initialization = function(web){
    this.task = function(){
        return new Promise(async function(resolve, reject){
            await web.app.gui.icontable.operates.parade.ofCell.enterance()
            await web.app.gui.icontable.operates.parade.ofIcon.enterance()
            web.app.gui.icontable.events.init()
            resolve()
        })
    }
}