const path = require('path')
const fs = require('fs')
module.exports = function Load(web){
    this.directory = async function(session){
        const app = session.app
        let list = null
        let dPath = path.resolve(app.data.info.path)
        let paths = dPath.split(path.sep)
        paths.shift()
        console.log(dPath)
        var state = fs.lstatSync(dPath)
		if(state.isDirectory())
        if(paths[0] == ''){
            list = []
            list.push(['home',null,'directory',null])
            list.push(['media',null,'directory',null])
        }else if(paths[0] == 'home' 
                || (paths[0] == 'home' && paths[1] == 'pi')
                || paths[0] == 'media'){
            list = await web.sys.loads.data.list(dPath)
        }
        return list
    }
}