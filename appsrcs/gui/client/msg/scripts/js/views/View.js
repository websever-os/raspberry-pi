web.app.gui.src.msg.views.View = function(){
    this.table = function(){
        let table = $('<table></table>')
        this.tableJQObj = table
    }
    this.thead = function(){
        let thead = $('<thead></thead>')
        let tr0 = $('<tr></tr>')
        let timeTh = $('<th>Time</th>')
        this.xThJQObj = $('<th>A</th>')
        let tr1 = $('<tr></tr>')
        let msgTh = $('<th>Message</th>')
        msgTh.attr('colspan','2')

        this.xThJQObj.addClass('x')
        tr0.append(timeTh)
        tr0.append(this.xThJQObj)
        tr1.append(msgTh)
        thead.append(tr0)
        thead.append(tr1)
        this.theadJQObj = thead

    }
    this.tbody = function(){
        this.tbodyJQObj = $('<tbody></tbody>')
    }
    this.table()
    this.thead()
    this.tbody()
    this.jQObj = this.tableJQObj
    this.jQObj.append(this.theadJQObj)
    this.jQObj.append(this.tbodyJQObj)
}