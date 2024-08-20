// Seleciona o primeiro elemento <canvas> encontrado na página
const canvas = document.querySelector('canvas');

// Obtém o contexto 2D do <canvas>, que é usado para desenhar gráficos e formas
const c = canvas.getContext('2d');

// Define as dimensões do canvas
canvas.width = 64 * 16; // Largura do canvas em pixels (1024)
canvas.height = 64 * 9; // Altura do canvas em pixels (576)

// Cria uma instância da classe Sprite representando o fundo do nível 1
const backgroundLevel1 = new Sprite({
    // Define a posição inicial do fundo (canto superior esquerdo da tela)
    position: {
        x: 0,
        y: 0,
    },
    // Define o caminho da imagem do fundo
    imageSrc: './img/backgroundLevel1.png'
})

// Cria uma nova instância do jogador
const player = new Player();

const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}

// Função de animação que será chamada continuamente para criar uma animação
function animate() {
    // Solicita ao navegador para chamar a função animate novamente no próximo frame
    window.requestAnimationFrame(animate);

    // Imagem de fundo
    backgroundLevel1.draw()

    player.velocity.x = 0
    if (keys.d.pressed) {
         player.velocity.x = 5
    }
    else if (keys.a.pressed) {
        player.velocity.x = -5
    }
    
    // Desenha o player no canvas
    player.draw();
    
    // Atualiza o estado do player
    player.update();
}

// Inicia o loop de animação
animate();
