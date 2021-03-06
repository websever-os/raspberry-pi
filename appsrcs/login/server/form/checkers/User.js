const path = require('path')
const fs = require('fs')

module.exports = function User(web){
    this.dir = function(session){
        const app = session.app
        return new Promise(async function(resolve, reject){
            const id = session.user.id
            const confDir = path.join('/home',id,'.ws-os')
            const jsonsDir = path.join(confDir,'jsons')
            const userIconsJSON = path.join(jsonsDir,'icons.json')
            const userThememsJSON = path.join(jsonsDir,'themes.json')
            const defaultIconsJSON = path.join(web.sys.path.ofAppsrcs,'gui','rules','jsons','icons.json')
            const defaultThememsJSON = path.join(web.sys.path.ofAppsrcs,'gui','rules','jsons','themes.json')
            let flag = false
            if(!web.sys.checks.path(confDir))
                flag = web.sys.tools.datum.toMake.directory(confDir)
            else flag = true

            if(flag && !web.sys.checks.path(jsonsDir))
                flag = web.sys.tools.datum.toMake.directory(jsonsDir)
            else flag = true

            if(flag && !web.sys.checks.path(userIconsJSON))
                web.sys.tools.datum.toCopy.file(userIconsJSON,defaultIconsJSON)

            if(flag && !web.sys.checks.path(userThememsJSON))
                web.sys.tools.datum.toCopy.file(userThememsJSON,defaultThememsJSON)
            resolve()
        })
    }
}