const path = require('path')
const w = global.words

module.exports = function System(web){
    this.forInit = function(rootPath){
        const sPath = {}
        sPath.ofRoot = rootPath
        sPath.ofSyssrcs = path.join(rootPath,w[23])
        sPath.ofAppsrcs = path.join(rootPath,w[24])
        sPath.ofServer = path.join(sPath.ofSyssrcs,w[3])
        sPath.ofRules = path.join(sPath.ofSyssrcs,w[34])
        sPath.ofRulesJSONs = path.join(sPath.ofRules,w[7])
        sPath.ofViewsJSON = path.join(sPath.ofRulesJSONs,w[8])
        sPath.ofServerJSONs = path.join(sPath.ofServer,w[7])
        sPath.ofMsgsJSON = path.join(sPath.ofServerJSONs,w[27])
        sPath.ofClient = path.join(sPath.ofSyssrcs,w[4])
        sPath.ofScripts = path.join(sPath.ofClient,w[9])
        sPath.ofJS = path.join(sPath.ofScripts,w[11])
        sPath.ofClientJSONs = path.join(sPath.ofJS,w[7])
        sPath.ofMedia = path.join(sPath.ofClient,w[18])
        sPath.ofImages = path.join(sPath.ofMedia,w[21])
        return sPath
    }
}