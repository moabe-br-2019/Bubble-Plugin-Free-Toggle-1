// Função de atualização
function(instance, properties, context) {
    const toggleCheck = instance.data.toggleInput;
    const toggleVisual = instance.data.toggleVisual;
    
    // Aplicar cor do estado ativo
    toggleVisual.style.setProperty('--check-toggle', properties.main_color);
    
    // Gerenciar estado disabled
    toggleCheck.disabled = properties.disable;
    if (properties.disable) {
        toggleVisual.classList.add('disabled');
    } else {
        toggleVisual.classList.remove('disabled');
    }
    
    // Calcular dimensões
    const width = properties.bubble.width();
    const height = properties.bubble.height();
    
    // Calcular proporções
    const togglePadding = height * 0.1;
    const circleSize = height - (togglePadding * 2);
    const moveDistance = width - circleSize - (togglePadding * 2);
    
    // Aplicar dimensões
    toggleVisual.style.width = `${width}px`;
    toggleVisual.style.height = `${height}px`;
    
    // Ajustar círculo interno
    const beforeStyle = `
        .mytoogle3:before {
            width: ${circleSize}px;
            height: ${circleSize}px;
            top: ${togglePadding}px;
            left: ${togglePadding}px;
            transform: translateX(0);
        }
        input[type="checkbox"]:checked + .mytoogle3:before {
            transform: translateX(${moveDistance}px);
        }
    `;
    
    // Atualizar estilos dinâmicos
    let dynamicStyle = document.getElementById('dynamic-toggle-style');
    if (!dynamicStyle) {
        dynamicStyle = document.createElement('style');
        dynamicStyle.id = 'dynamic-toggle-style';
        document.head.appendChild(dynamicStyle);
    }
    dynamicStyle.textContent = beforeStyle;
    
    // Remover listener anterior se existir
    if (instance.data.previousListener) {
        toggleCheck.removeEventListener('change', instance.data.previousListener);
    }
    
    // Adicionar novo listener apenas se não estiver desabilitado
    if (!properties.disable) {
        const changeListener = function() {
            instance.publishState('checked', toggleCheck.checked);
            instance.publishAutobinding(toggleCheck.checked);
            instance.triggerEvent('changed');
        };
        
        instance.data.previousListener = changeListener;
        toggleCheck.addEventListener('change', changeListener);
    }
    
    // Aplicar preset
    switch (properties.preset) {
        case 'Checked':
            toggleCheck.checked = true;
            instance.publishState('checked', toggleCheck.checked);
            break;
        case 'Unchecked':
            toggleCheck.checked = false;
            instance.publishState('checked', toggleCheck.checked);
            break;
        case 'Autobinding':
            toggleCheck.checked = properties.autobinding;
            instance.publishState('checked', properties.autobinding);
            break;
        default:
            console.log('Preset não definido');
            break;
    }
    
    // Atualizar visibilidade
    instance.canvas.style.display = properties.bubble.is_visible() ? 'block' : 'none';
}