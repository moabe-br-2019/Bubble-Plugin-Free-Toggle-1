function(instance, properties) {
    
	let toggleView = $(`<div></div>`)
    let mainColor = properties.main_color
    instance.canvas.append(toggleView)
    toggleView.css ('background-color', properties.main_color)
    toggleView.css('border-radius', '20px')
    toggleView.css('width', properties.bubble.width )
    toggleView.css('height', properties.bubble.height)


}