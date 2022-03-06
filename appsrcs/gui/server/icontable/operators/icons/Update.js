const editJsonFile = require("edit-json-file")
const path = require('path')
module.exports = function Update(web){
    this.ofCoordinate = function(session){
        const app = session.app
        let id = session.user.id
        
        let jPath = path.join('/etc/ws-os',id,'jsons','icons.json')
        if(web.sys.checks.path(jPath)){
            let json = editJsonFile(jPath)
            let info = app.data.info
            let icon = json.data.list[info.id]
            icon.row = info.row
            icon.cell = info.cell
            json.save()
        }
    }
}