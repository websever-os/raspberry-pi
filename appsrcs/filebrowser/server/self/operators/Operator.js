const fs = require('fs-extra')
const path = require('path')
const mime = require("mime-types")
module.exports = function Operator(web){
    const isFiltered = function(session){
        let flag = true
        let path = session.app.data.info.dst
        if(path == '/' || path == '/home' || path == 'media') flag = false
        return flag
    }
	this.rename = function(session){
		const info = session.app.data.info
		const srcPath = path.resolve(path.join(info.dst,info.srcName))
		const dstPath = path.resolve(path.join(info.dst,info.dstName))
		if(srcPath != dstPath){
			fs.renameSync(srcPath,dstPath)
			var type = null
			const state = fs.lstatSync(dstPath)
			if(!state.isDirectory())
				type = mime.lookup(dstPath)
			else
				type = 'directory'
			session.app.data.info = {path:info.dst,srcList:[info.srcName],dstList:[[info.dstName,state.mtimeMs,type,state.size]]}
			session.app.filebrowser.self.executes.rename.onClient(session)
			session.app.data.info = {msg:info.srcName + ' is renamed to ' + info.dstName + '.',time:state.mtimeMs}
			session.app.gui.msg.executes.sending(session)
		}
	}
	this.copy = function(session){
		let info = session.app.data.info
		const copiedList = []
		const src = info.src
		const dst = info.dst
		const list = info.list
		list.map(function(item){
			var srcPath = null
			var dstPath = null
			srcPath = path.resolve(path.join(src,item))
			if(fs.existsSync(srcPath)){
				item = nameTag_R(dst,item,0,' -copied','')
				dstPath = path.resolve(path.join(dst,item))
			}
			if(srcPath != null && dstPath != null){
				fs.copyFile(srcPath,dstPath,function(err){
					if (err) throw err;
					var state = fs.lstatSync(dstPath)
					if(!state.isDirectory())
						type = mime.lookup(dstPath)
					else
						type = 'directory'
					copiedList.push([item,state.mtimeMs,type,state.size])
					if(copiedList.length != 0){
						session.app.data.info = {path:dst,list:copiedList}
						session.app.filebrowser.self.executes.copy.onClient(session)
						session.app.data.info = {msg:path.join(dst,copiedList[0][0]) + ' is copied.',time:state.mtimeMs}
						session.app.gui.msg.executes.sending(session)
						copiedList.pop()
					}
				})
			}
		})
	}
	this.cut = function(session){
		if(isFiltered(session)){
			const info = session.app.data.info
			const srcList = []
			const dstList = []
			const src = info.src
			const dst = info.dst
			const list = info.list
			const uDir = path.join('/home',session.user.id)
			list.map(function(srcItem){
				var srcPath = null
				var dstPath = null
				srcPath = path.resolve(path.join(src,srcItem))
				if(fs.existsSync(srcPath)){
					var dstItem = nameTag_R(dst,srcItem,0,' -moved','')
					dstPath = path.resolve(path.join(dst,dstItem))
				}
				if(srcPath != null && dstPath != null && srcPath != uDir){
					fs.move(srcPath,dstPath,function(err){
						if (err) return console.log(err)
						var state = fs.lstatSync(dstPath)
						if(!state.isDirectory())
							type = mime.lookup(dstPath)
						else
							type = 'directory'
						srcList.push(srcItem)
						dstList.push([dstItem,state.mtimeMs,type,state.size])
						if(dstList.length != 0){
							session.app.data.info = {mode:'dst',path:dst,list:dstList}
							session.app.filebrowser.self.executes.cut.onClient(session)
							session.app.data.info = {mode:'src',path:src,list:srcList}
							session.app.filebrowser.self.executes.cut.onClient(session)
							session.app.data.info = {msg:path.join(dst,srcList[0]) + ' is moved to ' + path.join(dst,dstList[0][0]) + '.',time:state.mtimeMs}
							session.app.gui.msg.executes.sending(session)
							srcList.pop()
							dstList.pop()
						}
					})
				}
			})
		}
	}
	this.delete = function(session){
		if(isFiltered(session)){
			const deletedList = []
			let info = session.app.data.info
			let dst = info.dst
			let list = info.list
			let uDir = path.join('/home',session.user.id)
			const deleteItems = list.map(function(item){
				let fullPath = path.resolve(path.join(dst,item))
				if(uDir != fullPath || fs.existsSync(fullPath)){
					deletedList.push(item)
					fs.removeSync(fullPath)
				}
			})
			Promise.all(deleteItems)
			session.app.data.info = {path:dst,list:deletedList}
			session.app.filebrowser.self.executes.delete.onClient(session)
			
			session.app.data.info = {msg:path.join(dst,deletedList[0]) + ' and etc are delete.',time:state.mtimeMs}
			session.app.gui.msg.executes.sending(session)
		}
	}
    this.newDirectory = function(session){
        if(isFiltered(session)){
            var dst = session.app.data.info.dst
            var name = "New Directory"
            name = nameTagForDirctory_R(dst,name,1,'','')
			fs.mkdirSync(path.join(dst,name))
			var state = fs.lstatSync(path.join(dst,name))
			session.app.data.info = {path:dst,list:[[name,state.mtimeMs,'directory',state.size]]}
			session.app.filebrowser.self.executes.newDirectory.onClient(session)
			session.app.data.info = {msg:'New directory in ' + dst + '.',time:state.mtimeMs}
			session.app.gui.msg.executes.sending(session)
        }
    }
	const nameTagForDirctory_R = function(dir, name, cnt, tagName, fullTag){
        const fullpath = path.join(dir,name + fullTag)
		if(!fs.existsSync(fullpath)){
			return name+fullTag
		}else{
			return nameTagForDirctory_R(dir,name,++cnt,tagName,tagName + "("+cnt+")")
		}		
	}
    const nameTag_R = function(dir, name, cnt, tagName, fullTag){
        let names = name.split('.')
		let ext = names[names.length-1]
		let regex = new RegExp('.'+ext+'$')
		let namehead = name.replace(regex,'')
		const fullpath = path.join(dir,namehead + fullTag + '.' +ext)
		if(!fs.existsSync(fullpath)){
			return namehead + fullTag + '.' +ext
		}else{
			return nameTag_R(dir,name,++cnt,tagName,tagName + "("+cnt+")")
		}			
	}
}