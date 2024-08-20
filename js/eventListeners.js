// Função para lidar com o evento de pressionar a tecla
window.addEventListener('keydown', (event) => {
    // Pulo
    switch (event.key) {
        case 'w':   
            // Verifica se o jogador está no chão (velocidade em y igual a 0)
            if (player.velocity.y === 0) {
                 // Executa o pulo
                player.velocity.y = -20
            }
            break

        // Move o player para a esquerda
        case 'a':
            keys.a.pressed = true
            break

        // Move o player para a direita
        case 'd':
            keys.d.pressed = true
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        // Move o player para a esquerda
        case 'a':
            keys.a.pressed = false
            break

        // Move o player para a direita
        case 'd':
            keys.d.pressed = false  
            break
    }
})