const fs = require("fs")
const mime = require("mime-types")
const path = require("path")
module.exports = function DataLoader(os){
	this.list = async function(dir){
		return new Promise(async function(resolve, reject){
			const files = fs.readdirSync(dir)
			const list = []
			await list_R(0,list,files,dir+path.sep)
			resolve(list)
		})
	}
	const list_R = function(idx, list, files, dir){
		return new Promise(async function(resolve, reject){
			if(files.length > idx){
				state = fs.lstatSync(dir+files[idx])
				const list1 = pushToList(idx,list,files,dir,state)
				const list2 = list_R(++idx,list,files,dir)
				await list1
				await list2
			}
			resolve()
		})
	}
	const pushToList = function(idx, list, files, dir, state){
		return new Promise(async function(resolve, reject){
			if(!state.isDirectory()){
				list[idx] = [files[idx],state.mtimeMs,mime.lookup(dir+files[idx]),state.size]
			}else{
				list[idx] = [files[idx],state.mtimeMs,"directory",state.size]
			}
			resolve()
		})
	}
	this.map = async function(dir){
		return new Promise(async function(resolve, reject){
			const files = fs.readdirSync(dir)
			const map = []
			await map_R(0,map,files,dir+path.sep)
			resolve(map)
		})
	}
	const map_R = function(idx, map, files, dir){
		return new Promise(async function(resolve, reject){
			if(files.length > idx){
				state = await lstatSync(dir+files[idx])
				const list1 = pushToMap(idx,map,files,dir,state)
				const list2 = map_R(++idx,map,files,dir)
				await list1
				await list2
			}
			resolve()
		})
	}
	const pushToMap = function(idx, map, files, dir, state){
		return new Promise(async function(resolve, reject){
			if(!state.isDirectory()){
				map[files[idx]] = [mime.lookup(path.join(dir,files[idx]))]
			}else{
				map[files[idx]] = ["directory"]
			}
			resolve()
		})
	}
}