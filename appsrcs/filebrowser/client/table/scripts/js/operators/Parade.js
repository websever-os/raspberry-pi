web.app.filebrowser.src.table.operators.Parade = function(web){
    this.withID = function(info){
        if(info.list != null){
            let win = $('#'+info.id+'.window')
            let table = win.find('.filetable')
            let path = table.find('.path')
            let tbody = table.find('tbody')
            tbody.remove()
            tbody = $('<tbody></tbody>')
            path.html(info.path)
            let tr = $("<tr></tr>").attr("class","parent").addClass("row")
            let td = $("<td></td>")
            tr.append(td)
            td = $("<td></td>").attr("colspan","4").text("..")
            td.addClass('name')
            tr.append(td)
            tbody.append(tr)
            info.list.forEach(function(item){
                let tr = new FilebrowserListItem(item)
                tbody.append(tr)
            })
            table.append(tbody)
        }
    }
    this.withPath = function(info){
        const trs = []
        let fbs = $('div.filebrowser')
        let paths = fbs.find('.path')
        paths.each(function(){
            let path = $(this)
            if(path.html() == info.path){
                let fbt = path.closest('table')
                const tbody = fbt.find('tbody')
                info.list.forEach(function(item){
                    let tr = new FilebrowserListItem(item)
                    tbody.append(tr)
                    trs.push(tr)
                })
            }
        })
        return trs
    }
}