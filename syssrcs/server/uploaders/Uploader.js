const fs = require('fs-extra')
const path = require('path')
const formidable = require('formidable')
const mime = require("mime-types")
const m = global.msgs
const lang = global.settings.lang
const w = global.words
module.exports = function Uploader(web){
    this.data = async function(session, params, req, res){
        if(params.length){
            const uploadedList = []
            const form = new formidable.IncomingForm()
            form.parse(req, function (err, fields, files) {
                Object.values(files).forEach(function(file){
                    const src = file.filepath
                    const name = nameTag_R(params[0],file.originalFilename,0,' -uploaded','')
                    const dst = path.resolve(path.join(params[0],name))
                    fs.renameSync(src, dst)
                    const state = fs.lstatSync(dst)
                    if(!state.isDirectory()){
                        type = mime.lookup(dst)
                        if(!type) type = ''
                    }else
                        type = 'directory'
                    uploadedList.push([name,state.mtimeMs,type,state.size])
                })
                if(uploadedList.length != 0){
                    session.app.data.info = {path:params[0],list:uploadedList}
                    if(params[0] == path.join('/home',session.user.id,'Desktop')){
                        //need to add Desktop Icon parade
                        session.app.filebrowser.self.executes.upload.onClient(session)
                    }else
                        session.app.filebrowser.self.executes.upload.onClient(session)
                }
            })
        }
    }
    const nameTag_R = function(dir, name, cnt, numTag, fullTag){
        const fullpath = path.join(dir,name + fullTag)
		if(!fs.existsSync(fullpath)){
			return name+fullTag
		}else{
			return nameTag_R(dir,name,++cnt,numTag,numTag + "("+cnt+")")
		}			
	}
}