// Seleciona o primeiro elemento <canvas> encontrado na página
const canvas = document.querySelector('canvas');

// Obtém o contexto 2D do <canvas>, que é usado para desenhar gráficos e formas
const c = canvas.getContext('2d');

// Define as dimensões do canvas
canvas.width = 64 * 16; // Largura do canvas em pixels (1024)
canvas.height = 64 * 9; // Altura do canvas em pixels (576)

// Cria uma nova instância do jogador
const player = new Player();

// Função de animação que será chamada continuamente para criar uma animação
function animate() {
    // Solicita ao navegador para chamar a função animate novamente no próximo frame
    window.requestAnimationFrame(animate);

    // Define a cor de preenchimento para o canvas
    c.fillStyle = 'white';
    
    // Preenche o canvas com a cor definida, efetivamente limpando o canvas
    c.fillRect(0, 0, canvas.width, canvas.height);
    
    // Desenha o player no canvas
    player.draw();
    
    // Atualiza o estado do player
    player.update();
}

// Inicia o loop de animação
animate();
