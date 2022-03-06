const path = require('path')

module.exports = function list(web){
    this.making = function(session){
        const app = session.app
        return new Promise(async function(resolve, reject){
            let icons = path.join('/home',session.user.id,'.ws-os','jsons','icons.json')
            icons = web.sys.reads.json(icons)
            let length = Object.keys(icons.list).length
            icons = listing_r(0,length,icons,{length:0})
            resolve(icons)
        })
    }
    const listing_r = function(idx, length, icons, list){
        if(idx<length){
            let icon = icons.list[idx]
            list = makeTag(idx,icon,icons,list)
            list = listing_r(++idx,length,icons,list)
        }
        return list
    }
    const makeTag = function(idx, icon, icons, list){
        let info = icons[icon.sort][icon.id]
        let vPath = path.join(web.sys.path.ofAppsrcs,info.path,'rules','jsons','views.json')
        let img = web.sys.views.unspecific_icon
        if(web.sys.checks.path(vPath)){
            let views = web.sys.reads.json(vPath)
            let iPath = path.join(web.sys.path.ofAppsrcs,views.icon)
            if(web.sys.checks.path(iPath))
                img = views.icon
        }
        list.length++
        list[idx] = {
            id:icon.id,
            row:icon.row,
            cell:icon.cell,
            img:'/'+img,
            title:info.title,
            path:info.path,
            sort:icon.sort
        }
        return list
    }
}