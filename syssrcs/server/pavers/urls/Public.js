const path = require('path')
const w = global.words

module.exports = function Public(web){
    this.forInit =  function(session){
        const app = session.app
        const media = '/'+w[4]+'/'+w[18]
        const scripts = '/'+w[4]+'/'+w[9]
        const aURL = {}
        aURL.ofCSS = '/'+app.name+scripts+'/'+w[10]+'/'
        aURL.ofAudios = '/'+app.name+media+'/'+w[20]+'/'
        aURL.ofImages = '/'+app.name+media+'/'+w[21]+'/'
        aURL.ofVideos = '/'+app.name+media+'/'+w[22]+'/'
        aURL.ofApplications = '/'+app.name+'/'+w[25]+'/'
        aURL.ofJS = '/'+app.name+scripts+'/'+w[11]+'/'
        return aURL
    }
}