const https = require("https")
const fs = require("fs")
const path = require("path")
module.exports = function HTTPS(){
    this.key = null
    this.cert = null
	this.server = null
	this.pems = {
		cert:path.join(__dirname,"pems","public-cert.pem"),
		key:path.join(__dirname,"pems","private-key.pem")
	}
    this.createServer = function(callback){
        var options = {
            key: fs.readFileSync(this.pems.key),
            cert: fs.readFileSync(this.pems.cert)
        }
		this.server = https.createServer(options, callback)
    }
}

