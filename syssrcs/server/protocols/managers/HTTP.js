module.exports = function Manager(){
    let HTTP = require('../layers/applications/HTTP')
    let HTTPS = require('../layers/applications/HTTPS')
	this.normal = new HTTP()
    this.secure = new HTTPS()
}