function(instance, context) {
	
    instance.data.id = "toggle-" + Math.random().toString(36).substring(2,16);
    instance.data.togid = "togid" + Math.random().toString(24).substring(2,16);
	instance.data.toggleLabel = document.createElement('LABEL');
	instance.data.toggleElement =   document.createElement('input');
    instance.data.toggleElement.setAttribute('type', 'checkbox')
    instance.data.toggleElement.id = instance.data.id
    instance.data.toggleElement.classList.add("toG")
	instance.data.toggleElemVisual = document.createElement('div');
    instance.data.toggleElemVisual.id = instance.data.togid
    instance.data.toggleLabel.append(instance.data.toggleElement, instance.data.toggleElemVisual);
    instance.data.toggleElemVisual.classList.add ("mytoggle")
   
    instance.canvas.append(instance.data.toggleLabel)
}