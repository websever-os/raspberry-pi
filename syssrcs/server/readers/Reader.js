const fs = require('fs')
const ENCODING = 'utf8'
module.exports = function Reader(web){
    let URL = require('./URL')
    let View = require('./View')
    this.url = new URL(web)
    this.view = new View(web)
	this.file = function(path){
        return fs.readFileSync(path)
    }
	this.text = function(path){
        return fs.readFileSync(path, {encoding: ENCODING})
    }
	this.json = function(path){
        var rawData = fs.readFileSync(path)
        return JSON.parse(rawData)
    }
    this.method = function(session, req, res){
        const cmds = session.url.split('?')
        const cmd = cmds[0].replace('/','')
        const params = cmds.slice(1)
        try{
            eval(cmd+'(session,'+JSON.stringify(params)+',req,res)')
        }catch(err){
            console.log(err)
        }
    }
}