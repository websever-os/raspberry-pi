const path = require('path')
module.exports = function Load(web){
    this.directory = async function(session){
        const app = session.app
        let list = null
        let dPath = app.data.info.path
        app.data.info.path = dPath
        let paths = dPath.split(path.sep)
        paths.shift()
        if(paths[0] == ''){
            list = []
            list.push(['home',null,'directory',null])
            list.push(['media',null,'directory',null])
        }else if(paths[0] == 'home' 
                || (paths[0] == 'home' && paths[1] == 'pi')
                || paths[0] == 'media'){
            list = await web.sys.loads.data.list(app.data.info.path)
        }
        return list
    }
}