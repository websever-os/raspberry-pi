const path = require('path')
const m = global.msgs
const lang = global.settings.lang
const w = global.words

module.exports = function View(web){
    this.ofApp = function(session,sysJS){
        const app = session.app
        var html = null
        var view = app[app.name].view

        const viewJSON = app[app.name].viewsJSON[view.name]
        if(viewJSON !== undefined)
            view.data = frame(viewJSON.frame,session)
        else{
            console.log(view.name)
            app.status = w[33]
            app.msg = m[lang][404][8]
        }

        if(app.status == w[30]){
            view.data = view.data.replace('{{ title }}',viewJSON.title)
            view.data = view.data.replace('{{ css }}',app_css_r(0,"",viewJSON.css,session))
            html = ''
            if(sysJS)
            html = sys_js_r(0, '')
            html += app_js_r(0,'',viewJSON.js,session)
            view.data = view.data.replace('{{ js }}',html)
            html = parts_r(0,'',viewJSON.headers,session)
        }
        if(app.status == w[30])
            html = include_r(html,session)
        if(app.status == w[30])
            view.data = view.data.replace('{{ headers }}',html)
        if(app.status == w[30])
            html = parts_r(0,"",viewJSON.sections,session)
        if(app.status == w[30])
            html = include_r(html,session)
        if(app.status == w[30])
            view.data = view.data.replace('{{ sections }}',html)
        if(app.status == w[30])
            html = parts_r(0,"",viewJSON.footers,session)
        if(app.status == w[30])
            html = include_r(html,session)
        if(app.status == w[30])
            view.data = view.data.replace('{{ footers }}',html)
        
    }
    const frame = function(frame, session){
        const app = session.app
        const fPath = path.join(app[app.name].path.ofClient,frame+'.html')
        var html = ''
        if(web.sys.checks.path(fPath))
            html = web.sys.reads.text(fPath)
        else{
            app.status = w[33]
            app.msg = m[lang][404][4]
        }
        return html
    }
    const app_css_r = function(idx, html, css, session){
        const app = session.app
        if(idx < css.length){
            var custom = ''
            var cURL = css[idx]
            if(cURL.includes('?custom')){
                custom = '?custom'
                cURL = cURL.replace(custom,'')
            }
            html += '<link rel="stylesheet" type="text/css" href="/'+app.name+'/'+w[4]+'/'+cURL+'.css'+custom+'">'
            html = app_css_r(++idx,html,css,session)
        }
        return html
    }
    const sys_js_r = function(idx, html){
        const js = web.sys.views.syssrcs.js
        if(idx < js.length){
            var custom = ''
            var jURL = js[idx]
            if(jURL.includes('?custom')){
                custom = '?custom'
                jURL = jURL.replace(custom,'')
            }
            html += '<script src="'+w[0]+'/'+jURL+'.js'+custom+'"></script>'
            html = sys_js_r(++idx,html)
        }
        return html
    }
    const app_js_r = function(idx, html, js, session){
        const app = session.app
        if(idx < js.length){
            var custom = ''
            var jURL = js[idx]
            if(jURL.includes('?custom')){
                custom = '?custom'
                jURL = jURL.replace(custom,'')
            }
            html += '<script src="/'+app.name+'/'+w[4]+'/'+jURL+'.js'+custom+'"></script>'
            html = app_js_r(++idx,html,js,session)
        }
        return html
    }
    const include_r = function(html, session){
        const app = session.app
        if(html.match(/({{).*(}})/g)){
            const tagSPoint = html.search(/{{/g)
            const tagEPoint = html.search(/}}/g)
            const fullTag = html.slice(tagSPoint,tagEPoint+2)
            var fPath = html.slice(tagSPoint+3,tagEPoint-1)
            fPath = path.join(app[app.name].path.ofClient,fPath+'.html')
            if(web.sys.checks.path(fPath)){
                html = html.replace(fullTag,web.sys.reads.text(fPath))
                html = include_r(html,session)
            }else{
                app.status = w[33]
                app.msg = fPath.replace(app[app.name].path.ofApp,'')+m[lang][w[33]][5]
            }
        }
        return html
    }
    const parts_r = function(idx, html, parts, session){
        const app = session.app
        if(idx < parts.length){
            var pPath = path.join(app[app.name].path.ofClient,parts[idx]+'.html')
            if(web.sys.checks.path(pPath)){
                html += web.sys.reads.text(pPath)
                html = parts_r(++idx,html,parts,session)
            }else{
                app.status = w[33]
                app.msg = pPath.replace(app[app.name].path.ofClient,'')+m[lang][w[33]][5]
            }
        }
        return html
    }
}