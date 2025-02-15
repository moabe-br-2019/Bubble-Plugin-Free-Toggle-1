function(instance, properties, context) {
	
    const toggleCheck = instance.data.toggleElement
    const togMainColor = instance.data.toggleElemVisual
    const colorMain = properties.main_color
    
    toggleCheck.checked = properties.autobinding;
	togMainColor.style.setProperty("--check-toggle", colorMain );
    instance.data.toggleElemVisual.style.setProperty("--uncheck-toggle", properties.unchecked_color );
    toggleCheck.addEventListener('change', function(){
       
        instance.publishState('checked', toggleCheck.checked)
        instance.publishAutobinding(toggleCheck.checked)
        instance.triggerEvent('changed')
        
    });
    
    switch (properties.preset) {
      case 'Checked':
        toggleCheck.checked = true;
        instance.publishState('checked', toggleCheck.checked)
        break;
      case 'Unchecked':
        toggleCheck.checked = false;
        instance.publishState('checked', toggleCheck.checked)
        break;
      case 'Autobinding':
        toggleCheck.checked = properties.autobinding;
        instance.publishState('checked', properties.autobinding)
        break;
      default:
        // caso nenhuma das opções acima seja correspondida
        console.log('Opção inválida');
        break;
    }
    
  
    
}