function(instance, properties, context) {
	
    const toggleCheck = document.getElementById(instance.data.id)
    const togMainColor = document.getElementById(instance.data.togid)
    const ColorMain = properties.main_color
    
    toggleCheck.checked = properties.autobinding;
	togMainColor.style.setProperty("--check-toggle", ColorMain );
    toggleCheck.addEventListener('change', function(){
       
        instance.publishState('checked', toggleCheck.checked)
        instance.publishAutobinding(toggleCheck.checked)
        instance.triggerEvent('changed')
        
    });
    
  
    
}