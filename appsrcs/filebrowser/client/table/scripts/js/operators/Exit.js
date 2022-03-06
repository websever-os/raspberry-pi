web.app.filebrowser.src.table.operators.Exit = function(web){
    this.withPath = function(info){
        let fbs = $('div.filebrowser')
        let paths = fbs.find('.path')
        const pPro = paths.map(function(){
            let path = $(this)
            if(path.html() == info.path){
                let fbt = path.closest('table')
                const tbody = fbt.find('tbody')
                let tds = tbody.find('td.name')
                const tPro = tds.map(function(){
                    const td = $(this)
                    const dataName = td.html()
                    const tr = td.closest('tr')
                    const lPro = info.list.map(function(item){
                        if(dataName == item){
                            tr.remove()
                        }
                    })
                    Promise.all(lPro)
                })
                Promise.all(tPro)
            }
        })
        Promise.all(pPro)
    }
}