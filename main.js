document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    
    let count = 0; // Inicializa o contador em 0
    
    // Função para atualizar o contador exibido
    function updateCounter() {
        counterElement.textContent = count;
    }
    
    // Incrementar o contador quando o botão de incremento é clicado
    incrementButton.addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    // Decrementar o contador quando o botão de decremento é clicado
    decrementButton.addEventListener('click', function() {
        count--;
        updateCounter();
    });
    
    // Atualizar o contador inicialmente
    updateCounter();
});