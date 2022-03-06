const path = require('path')
const editJSONFile = require("edit-json-file")
module.exports = function Customizer(web){
    this.data = function(session){
        const app = session.app

        //dev mode
        /*
        session.user = {id:'pi', auth:true}
        if(web.users['pi'] === undefined)
            web.users['pi'] = []
        let pi = web.users['pi']
        if(!pi.includes(session.hash))
            pi.push(session.hash)
        session.app.nodes = web.sessions[pi[0]].app.nodes
        */
       
        if(web.sys.checks.url.forCustom.css(app[app.name].viewsJSON.desktop.css[0],session)){
            if(session.user != null){
                let id = session.user.id
                let jPath = path.join(path.sep+'etc','ws-os',id,'jsons','themes.json')
                if(web.sys.checks.path(jPath)){
                    let json = editJSONFile(jPath)
                    app.file.text = app.file.text.replaceAll('/* barPaddingWidth */',json.data.bar.padding['width'])
                    app.file.text = app.file.text.replaceAll('/* taskbarWidth */',json.data.taskbar['width'])
                    app.file.text = app.file.text.replaceAll('/* icontableBorderWidth */',json.data.icontable.border['width'])
                    app.file.text = app.file.text.replaceAll('/* iconCellWidth */',json.data.icon.cell['width'])
                    app.file.text = app.file.text.replaceAll('/* iconCellHeight */',json.data.icon.cell['height'])
                    app.file.text = app.file.text.replaceAll('/* windowButtonWidth */',json.data.window.button['width'])
                    app.file.text = app.file.text.replaceAll('/* windowButtonBorderWidth */',json.data.window.button.border['width'])
                    app.file.text = app.file.text.replaceAll('/* windowButtonImgPaddingWidth */',json.data.window.button.img.padding['width'])
                    app.file.text = app.file.text.replaceAll('/* windowButtonImgWidth */',json.data.window.button.img['width'])
                    app.file.text = app.file.text.replaceAll('/* windowButtonImgHeight */',json.data.window.button.img['height'])
                    app.file.text = app.file.text.replaceAll('/* windowOuterWidth */',json.data.window.outer['width'])
                    app.file.text = app.file.text.replaceAll('/* windowOuterHeight */',json.data.window.outer['height'])
                    app.file.text = app.file.text.replaceAll('/* iconTitleFont-size */',json.data.icon.title['font-size'])
                    app.file.text = app.file.text.replaceAll('/* windowHeadHeight */',json.data.window.head['height'])
                    app.file.text = app.file.text.replace('/* windowOuterMin-width */',json.data.window.outer['min-width'])
                    app.file.text = app.file.text.replace('/* windowOuterMin-height */',json.data.window.outer['min-height'])
                    app.file.text = app.file.text.replace('/* windowOuterBorderColor */',json.data.window.outer.border['color'])
                    app.file.text = app.file.text.replace('/* windowOuterBorderWidth */',json.data.window.outer.border['width'])
                    app.file.text = app.file.text.replace('/* windowOuterLeft */',json.data.window.outer['left'])
                    app.file.text = app.file.text.replace('/* windowOuterTop */',json.data.window.outer['top'])
                    app.file.text = app.file.text.replace('/* windowHeadBackground-color */',json.data.window.head['background-color'])
                    app.file.text = app.file.text.replace('/* backgroundBackground-color */',json.data.background['background-color'])
                    app.file.text = app.file.text.replace('/* iconTitleColor */',json.data.icon.title['color'])
                    app.file.text = app.file.text.replace('/* iconHoverBackground-color */',json.data.icon.hover['background-color'])
                    app.file.text = app.file.text.replace('/* iconHoverOpacity */',json.data.icon.hover['opacity'])
                    app.file.text = app.file.text.replace('/* taskbarBackground-color */',json.data.taskbar['background-color'])
                    app.file.text = app.file.text.replace('/* windowButtonHeight */',json.data.window.button['height'])
                    app.file.text = app.file.text.replace('/* windowButtonBorderColor */',json.data.window.button.border['color'])
                    app.file.text = app.file.text.replace('/* windowButtonBackground-color */',json.data.window.button['background-color'])
                    app.file.text = app.file.text.replace('/* windowButtonHoverBackground-color */',json.data.window.button.hover['background-color'])
                }
            }
        }
    }
}