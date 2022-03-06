module.exports = function Initialization(web){
    this.task = async function(session){
        const app = session.app
        let icons = await app.gui.icontable.operates.icon.list.making(session)
        let windows = app.gui.window.engine.ofEnum.getsJSON().windows
        app.data = new web.Data(session)
        app.data.info.id = session.user.id
        app.data.info.icons = icons
        app.data.info.windows = windows
        app.data.cmd = 'web.app.gui.desktop.executes.init.task'
        web.socket.sends.data.toSelf(session)
    }
}