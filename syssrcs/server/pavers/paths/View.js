const path = require('path')

module.exports = function View(web){
    this.forInit = function(session){
        const app = session.app
        app[app.name].path.ofView = path.join(app[app.name].path.ofApp,app[app.name].view.name)
    }
}