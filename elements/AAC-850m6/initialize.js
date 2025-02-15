// Função de inicialização
function(instance, context) {
    // Definição dos estilos
    const styles = `
        .mytoogle3 {
            position: relative;
            background-color: #E8E8E8;
            border-radius: 100px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            box-sizing: border-box;
            overflow: hidden;
            border: none;
        }

        .mytoogle3.disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .mytoogle3:before {
            content: "";
            position: absolute;
            background-color: white;
            border-radius: 50%;
            transition: all 0.2s ease-in-out;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        input[type="checkbox"].toG {
            display: none;
        }

        input[type="checkbox"]:checked + .mytoogle3 {
            background-color: var(--check-toggle);
        }

        input[type="checkbox"]:checked + .mytoogle3:before {
            background-color: white;
        }
    `;
    
    // Criar elementos
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    
    instance.data.id = `toggle-${Math.random().toString(36).substr(2, 9)}`;
    instance.data.togid = `togid-${Math.random().toString(36).substr(2, 9)}`;
    
    const toggleLabel = document.createElement('label');
    const toggleInput = document.createElement('input');
    const toggleVisual = document.createElement('div');
    
    toggleInput.type = 'checkbox';
    toggleInput.id = instance.data.id;
    toggleInput.className = 'toG';
    
    toggleVisual.id = instance.data.togid;
    toggleVisual.className = 'mytoogle3';
    
    // Armazenar referências para uso posterior
    instance.data.toggleInput = toggleInput;
    instance.data.toggleVisual = toggleVisual;
    
    toggleLabel.append(toggleInput, toggleVisual);
    instance.canvas.append(toggleLabel);
}
