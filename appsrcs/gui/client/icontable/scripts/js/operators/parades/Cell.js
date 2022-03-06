web.app.gui.src.icontable.operators.parades.Cell = function(web){
    this.enterance = function(){
        return new Promise(async function(resolve, reject){
            const bgWidth = parseInt($("#background").width())
            const bgHeight = parseInt($("#background").height())
            const icontable = $("#icontable")
            const cell = await getCellSize(icontable)
            const numOfTD = parseInt(bgWidth/cell.width)
            const numOfTR = parseInt(bgHeight/cell.height)
            icontable.empty()
            await addTr_r(0,numOfTD,numOfTR,icontable)
            resolve()
        })
    }
    const addTr_r = function(rIdx, numOfTD, numOfTR, icontable){
        return new Promise(async function(resolve, reject){
            if(rIdx<numOfTR){
                var tr = $('<tr></tr>')
                await addTD_r(0,numOfTD,tr)
                icontable.append(tr)
                await addTr_r(++rIdx,numOfTD,numOfTR,icontable)
            }
            resolve()
        })
    }
    const addTD_r = function(dIdx, numOfTD, tr){
        return new Promise(async function(resolve, reject){
            if(dIdx<numOfTD){
                var div = $('<div></div>')
                var td = $('<td></td>')
                div.addClass('cell')
                td.append(div)
                tr.append(td)
                await addTD_r(++dIdx,numOfTD,tr)
            }
            resolve()
        })
    }
    const getCellSize = function(icontable){
        return new Promise(function(resolve, reject){
            const tr = $("<tr></tr>")
            const td = $("<td></td>")
            const div = $("<div></div>")
            div.addClass('cell')
            td.append(div)
            tr.append(td)
            icontable.append(tr)
            const width = parseInt(div.width()) + parseInt(div.css('border-top'))
            const height = parseInt(div.height()) + parseInt(div.css('border-left'))
            tr.remove()
            resolve({width:width, height:height})
        })
    }
}