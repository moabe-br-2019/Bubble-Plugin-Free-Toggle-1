function(instance, context) {
	
    instance.data.id = "toggle-" + Math.random().toString(36).substring(2,16);
    instance.data.togid = "togid" + Math.random().toString(24).substring(2,16);
	const toggleLabel = 	document.createElement('LABEL');
	const toggleElement =   document.createElement('input');
    toggleElement.setAttribute('type', 'checkbox')
    toggleElement.setAttribute('id', instance.data.id)
    toggleElement.classList.add("toG")
	const toggleElemVisual = document.createElement('div');
    toggleElemVisual.setAttribute('id', instance.data.togid)
    toggleLabel.append(toggleElement);
    toggleLabel.append(toggleElemVisual);
    toggleElemVisual.classList.add ("mytoggle")
   
    
    
    
    $(instance.canvas).append(toggleLabel)
}