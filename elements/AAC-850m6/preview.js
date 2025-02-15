function(instance, properties) {
    // Criar o container do toggle
    const toggleContainer = $(`<div class="toggle-preview-container"></div>`);
    const toggleCircle = $(`<div class="toggle-preview-circle"></div>`);
    
    // Adicionar o círculo ao container
    toggleContainer.append(toggleCircle);
    
    // Estilo do container
    toggleContainer.css({
        'background-color': '#E8E8E8',
        'border-radius': '100px',
        'width': properties.bubble.width() + 'px',
        'height': properties.bubble.height() + 'px',
        'position': 'relative',
        'transition': 'background-color 0.2s ease-in-out',
        'overflow': 'hidden'
    });

    // Calcular dimensões do círculo
    const height = properties.bubble.height();
    const togglePadding = height * 0.1; // 10% de padding
    const circleSize = height - (togglePadding * 2);
    const moveDistance = properties.bubble.width() - circleSize - (togglePadding * 2);
    
    // Estilo do círculo
    toggleCircle.css({
        'width': circleSize + 'px',
        'height': circleSize + 'px',
        'background-color': properties.main_color,
        'border-radius': '50%',
        'position': 'absolute',
        'top': togglePadding + 'px',
        'left': togglePadding + 'px',
        'transition': 'transform 0.2s ease-in-out',
        'box-shadow': '0 2px 4px rgba(0,0,0,0.1)',
        'transform': properties.autobinding ? `translateX(${moveDistance}px)` : 'translateX(0)'
    });

    // Limpar o canvas anterior e adicionar o novo preview
    instance.canvas.empty().append(toggleContainer);
}