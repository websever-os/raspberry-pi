web.app.gui.src.icontable.operators.parades.Icon = function(web){
    this.enterance = function(){
        return new Promise(async function(resolve, reject){
            let icons = web.app.gui.json.icons
            let trs = $('#icontable').find('tr')
            await parade_r(0,icons,trs)
            resolve()
        })
    }
    const parade_r = function(idx, icons, trs){
        return new Promise(async function(resolve, reject){
            if(idx<icons.length){
                let icon = icons[idx]
                let cellDiv = trs.eq(icon.row).children('td').eq(icon.cell).children(0)
                let iconDiv = $('<div></div>')
                let iconImg = $('<img>')
                let iconTitle = $('<div></div>')
                iconDiv.addClass('icon')
                iconDiv.attr('id',icon.id)
                iconDiv.attr('sort',icon.sort)
                iconDiv.attr('draggable','true')
                iconImg.attr('src',icon.img)
                iconTitle.addClass('title')
                iconTitle.html(icon.title)
                iconDiv.append(iconImg)
                iconDiv.append(iconTitle)
                cellDiv.append(iconDiv)
                await parade_r(++idx,icons,trs)
            }
            resolve()
        })
    }
}