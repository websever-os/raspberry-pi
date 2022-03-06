web.sys.srcs.adjustors.effects.Process = function(web){
    this.toAppend = function(part, title){
        const link = $('<link>')
        link.attr({
            class:'p_css',
            rel:'stylesheet',
            type:'text/css',
            href:'/syssrcs/client/scripts/css/processing.css'
        })
        $('head').append(link)
        const fDiv = $('<div></div>')
        const cDiv = $('<div></div>')
        const gDiv = $('<div></div>')
        const tDiv = $('<div></div>')
        fDiv.addClass('p_frame')
        cDiv.addClass('p_case')
        gDiv.addClass('p_graph')
        tDiv.addClass('p_title')
        tDiv.html(title)
        cDiv.append(tDiv)
        cDiv.append(gDiv)
        fDiv.append(cDiv)
        fDiv.width(window.innerWidth)
        fDiv.height(window.innerHeight)
        $(part).append(fDiv)
    }
    this.toRemove = function(){
        $('div.p_frame').remove()
        $('link.p_css').remove()
    }
}