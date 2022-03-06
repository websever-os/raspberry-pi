web.app.filebrowser.src.self.operators.Operator = function(web){
    var selectedData = null
    var path = null
    var info = null
    var event = null
    const init = function(evt){
        if(event === undefined || event == null)
            event = web.app.filebrowser.event
        else event = evt
        let tagName = $(event.target).prop('tagName')
        if(event.type == 'drop'){
            if(tagName == 'TD')
                path = $(event.target).closest('.filetable').find('.path').html()
            else if(tagName == 'DIV')
                path = $(event.target).find('.path').html()
            selectedData = event.originalEvent.dataTransfer.files
        }else if(tagName == 'DIV' || tagName == 'SECTION')
            path = $(event.target).find('.path').html()
        else{
            path = web.app.gui.selectedData[0]
            selectedData = web.app.gui.selectedData.slice(1).concat()
        }
    }
    const isFiltered = function(){
        let flag = true
        if(path == '/' || path == '/home' || path == '/media') flag = false
        if(!flag) alert('You have no right. This works under /home/'+web.user.id+'.')
        return flag
    }
    this.copy = function(){
        $('.contextmenu').remove()
        init()
        info = {mode:'copy',src:path,list:selectedData}
    }
    this.cut = function(){
        $('.contextmenu').remove()
        init()
        if(isFiltered())
            info = {mode:'cut',src:path,list:selectedData}
        console.log(info)
    }
    this.paste = function(){
        $('.contextmenu').remove()
        init()
        if(isFiltered() && info != null){
            info.dst = path
            if(info.mode == 'copy')
                web.app.filebrowser.self.executes.copy.onServer(info)
            else if(info.mode == 'cut' && confirm('Are you sure to move data?'))
                web.app.filebrowser.self.executes.cut.onServer(info)
            info = null
        }
    }
    this.newDirectory = function(){
        $('.contextmenu').remove()
        init()
        if(isFiltered()){
            info = {}
            info.dst = path
            web.app.filebrowser.self.executes.newDirectory.onServer(info)
            info = null
        }
    }
    this.delete = function(){
        $('.contextmenu').remove()
        init()
        if(isFiltered()){
            if(confirm('Are you sure?')){
                info = {}
                info.dst = path
                info.list = selectedData
                web.app.filebrowser.self.executes.delete.onServer(info)
                info = null
            }
        }
    }
    this.rename = function(){
        $('.contextmenu').remove()
        init()
        if(isFiltered()){
            const id = $(event.target).closest('.window').attr('id')
            const idx = $(event.target).closest('tr').index()
            const td = $($('#'+id+'.window').find('td.name')[idx])
            var srcName = td.html()
            td.attr("contenteditable",true)
            td.focus()
            range = document.createRange()
            range.selectNodeContents(td[0])
            range.collapse(false)
            selection = window.getSelection()
            selection.removeAllRanges()
            selection.addRange(range)
            td.keypress(function(event){
                if(event.which == 13)
                    td.blur()
            })
            td.blur(function(event){
                td.attr("contenteditable",false)
                var dstName = $(td).html()
                let info = {dst:path,srcName:srcName,dstName:dstName}
                if(srcName != dstName){
                    web.app.filebrowser.self.executes.rename.onServer(info)
                    td.html(srcName)
                }
            })
        }
    }
    this.download = function(){
        $('.contextmenu').remove()
        init()
        var url = '/web.sys.downloads.data'
        selectedData.map(function(item){
            setTimeout(function() {
                let a = $('<a></a>')
                a.attr('href',url + '?'+path+'/'+item)
                a.attr('target','_blank')
                a[0].click()   
            }, 1000)
        })
    }
    this.share = function(){
        $('.contextmenu').remove()
    }
    this.upload = function(event){
        $('.contextmenu').remove()
        init(event)
        if(isFiltered()){
            uploader(selectedData)
        }
    }
    const uploader = function(files){
        const form = $('<form></form>')
        form.attr('method','post')
        form.attr('enctype','multipart/form-data')
        const input = $('<input multiple>')
        input.attr('type','file')
        input[0].files = files
        const submit = $('<input>')
        submit.attr('type','submit')
        form.append(input)
        form.append(form)
        form.submit(function(event) {
            event.preventDefault()
            const formData = new FormData(this)
            Object.values(files).forEach(function(file, idx){
                formData.append(idx,file)
            })
            $.ajax({
                url: '/web.sys.uploads.data?'+path,
                type: 'POST',
                data: formData,
                cache: false,
                contentType: false,
                processData: false
            })
        }).trigger('submit')
    }
}