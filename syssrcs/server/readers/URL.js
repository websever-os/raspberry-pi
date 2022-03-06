const path = require('path')
const fs = require('fs')
const w = global.words
module.exports = function URL(web){
    this.forStaticFile = function(session){
        const url = session.url
        const app = session.app
        app.file = {
            path:null,
            type:null,
            url:url
        }
        var urlForPath = url
        if(url.includes(w[0])){
            if(url.includes(w[1])) urlForPath = url.replace(w[1],'')
            app.file.path = path.join(web.sys.path.ofRoot,urlForPath)
        }else if(url.match(/favicon.ico/ig)){
            app.file.path = path.join(web.sys.path.ofAppsrcs,urlForPath)
        }else{
            if(url.includes(w[1])) urlForPath = url.replace(w[1],'')
            app.file.path = path.join(web.sys.path.ofAppsrcs,urlForPath)
        }
        if(url.match(/favicon.ico/ig)){
            app.file.type = 'image/x-icon'
        }else if(url.match(/.css$|.css\?custom$/ig)){
            app.file.type = 'text/css'
        }else if(url.match(/.js$|.js\?custom$/ig)){
            app.file.type = 'text/javascript'
        }else if(url.match(/.json$/ig)){
            app.file.type = 'text/javascript'
        }else if(url.match(/.jpg$/ig)){
            app.file.type = 'image/jpeg'
        }else if(url.match(/.png$/ig)){
            app.file.type = 'image/png'
        }else if(url.match(/.gif$/ig)){
            app.file.type = 'image/gif'
        }else if(url.match(/.bmp$/ig)){
            app.file.type = 'image/bmp'
        }else if(url.match(/.webp$/ig)){
            app.file.type = 'image/webp'
        }else if(url.match(/.tiff$/ig)){
            app.file.type = 'image/tiff'
        }else if(url.match(/.ogg$/ig)){
            app.file.type = 'audio/ogg'
        }else if(url.match(/.wav$/ig)){
            app.file.type = 'audio/wav'
        }else if(url.match(/.mp3$/ig)){
            app.file.type = 'audio/mp3'
        }else if(url.match(/.mp4$/ig)){
            app.file.type = 'video/mp4'
        }else if(url.match(/.avi$/ig)){
            app.file.type = 'video/avi'
        }else if(url.match(/.pdf$/ig)){
            app.file.type = 'application/pdf'
        }else if(url.match(/.zip$/ig)){
            app.file.type = 'application/zip'
        }
    }
}