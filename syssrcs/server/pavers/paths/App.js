const path = require('path')
const w = global.words
module.exports = function App(web){
    this.forInit = function(appPath){
        const aPath = {}
        aPath.ofApp = appPath
        aPath.ofClient = path.join(appPath,w[4])
        aPath.ofServer = path.join(appPath,w[3])
        aPath.ofRules = path.join(appPath,w[34])
        aPath.ofRulesJSONs = path.join(aPath.ofRules,w[7])
        aPath.ofViewsJSON = path.join(aPath.ofRulesJSONs,w[8])
        return aPath
    }
}