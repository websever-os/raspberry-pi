web.app.gui.src.window.events.Event = function(web){
	const setsCont = function(divJQObj){
		const div = divJQObj
        div.on('dragstart',function(event){
            web.app.gui.window.controls.resize.forDrag.start(event)
		})
		div.on('drag',function(event){
            web.app.gui.window.controls.resize.forDrag.ing(event)
		})
		div.on('dragend',function(event){
            web.app.gui.window.controls.resize.forDrag.end(event)
		})
		div.on('contextmenu',function(event){
            event.preventDefault()
			event.stopPropagation()
		})
		div.on('dragover',function(event){
			event.preventDefault()
			event.stopPropagation()
		})
    }
	this.init = function(node){
        let classOf = new web.app.gui.window.Model().classOf
		let jQObj = node.win.view.jQObj
		let type = node.win.type
		if(type.resize){
			let nResizeJQObj = jQObj.find('.'+classOf.n)
			let wResizeJQObj = jQObj.find('.'+classOf.w) 
			let eResizeJQObj = jQObj.find('.'+classOf.e)
			let sResizeJQObj = jQObj.find('.'+classOf.s)
			let seResizeJQObj = jQObj.find('.'+classOf.se)
			let swResizeJQObj = jQObj.find('.'+classOf.sw)
			let neResizeJQObj = jQObj.find('.'+classOf.ne)
			let nwResizeJQObj = jQObj.find('.'+classOf.nw)
			setsCont(nResizeJQObj)
			setsCont(wResizeJQObj)
			setsCont(eResizeJQObj)
			setsCont(sResizeJQObj)
			setsCont(seResizeJQObj)
			setsCont(swResizeJQObj)
			setsCont(neResizeJQObj)
			setsCont(nwResizeJQObj)
		}
		if(type.title){
			let titleJQObj = jQObj.find('.'+classOf.title)
			titleJQObj.on('dragover',function(event){
				event.preventDefault()
				event.preventDefault()
			})
		}
		if(type.move){
			let moveJQObj = jQObj.find('.'+classOf.move)
			moveJQObj.on('contextmenu',function(event){
                event.preventDefault()
				event.stopPropagation()
			})
			moveJQObj.on('dragstart',function(event){
				web.app.gui.window.controls.move.forDrag.start(event)
			})
			moveJQObj.on('drag',function(event){
                web.app.gui.window.controls.move.forDrag.ing(event)
			})
			moveJQObj.on('dragend',function(event){
                web.app.gui.window.controls.move.forDrag.end(event)
			})
			moveJQObj.on('dragover',function(event){
				event.preventDefault()
				event.stopPropagation()
			})
			moveJQObj.on('click',function(event){
				web.app.gui.window.controls.move.forFocus.bySelf(event)
			})
		}
		if(type.maxButton){
			let maxButtonJQObj = jQObj.find('.'+classOf.max)
			maxButtonJQObj.on('click',function(event){
                web.app.gui.window.controls.button.ofMaxAndRestoration(event)
			})
			maxButtonJQObj.on('dragover',function(event){
				event.preventDefault()
				event.stopPropagation()
			})
			maxButtonJQObj.on('contextmenu',function(event){
                event.preventDefault()
				event.stopPropagation()
			})
		}
		if(type.minButton){
			let minButtonJQObj = jQObj.find('.'+classOf.min)
			minButtonJQObj.on('click',function(event){
                web.app.gui.window.controls.button.ofMin.bySelf(event)
			})
			minButtonJQObj.on('dragover',function(event){
				event.preventDefault()
				event.stopPropagation()
			})
			minButtonJQObj.on('contextmenu',function(event){
				event.preventDefault()
				event.stopPropagation()
			})
        }
		if(type.xButton){
			let xButtonJQObj = jQObj.find('.'+classOf.x)
			xButtonJQObj.on('click',function(event){
                web.app.gui.window.controls.button.ofClose.bySelf(event)
			})
			xButtonJQObj.on('dragover',function(event){
				event.preventDefault()
				event.stopPropagation()
			})
			xButtonJQObj.on('contextmenu',function(event){
				event.preventDefault()
				event.stopPropagation()
			})	
		}
		if(type.head){
			let headJQObj = jQObj.find('.'+classOf.head)
			headJQObj.on('dragover',function(event){
				event.preventDefault()
				event.stopPropagation()
			})
		}
		if(type.body){
			let bodyJQObj = jQObj.find('.'+classOf.body)
			bodyJQObj.on('mousedown',function(event){
				event.preventDefault()
				event.stopPropagation()
                web.app.gui.window.controls.move.forFocus.bySelf(event)
			})
			bodyJQObj.on('dragover',function(event){
				event.preventDefault()
				event.stopPropagation()
			})
			bodyJQObj.on('contextmenu',function(event){
				event.preventDefault()
				event.stopPropagation()
				web.app.gui.window.controls.move.forFocus.bySelf(event)
			})
			if(!type.iframe){
				var MutationObserver = window.MutationObserver || window.WebKitMutationObserver
				new MutationObserver(async function(mutationRecords){
					web.app.gui.window.controls.change.ofBody(mutationRecords)
				}).observe(bodyJQObj[0],{childList:true, characterData:true, attributes:true, subtree:true})
			}
		}
	}
}