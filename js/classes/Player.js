class Player {
    constructor() {
        // Inicializa a posição do player no canvas
        this.position = {
            x: 100,
            y: 100,
        };

        // Inicializa a velocidade do player (queda e movimento horizontal)
        this.velocity = {
            x: 0,
            y: 0,
        };

        // Define as dimensões do player
        this.width = 100;  // Largura do player
        this.height = 100; // Altura do player

        // Calcula a parte inferior do player com base na posição e altura
        this.sides = {
            bottom: this.position.y + this.height,
        };

        // Define a gravidade aplicada ao player
        this.gravity = 1;
    }

    // Método para desenhar o player na tela
    draw() {
        // Define a cor do player como vermelho
        c.fillStyle = 'red';
        // Desenha um retângulo preenchido com a cor definida
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    // Método para atualizar a posição e a física do player
    update() {
        // Atualiza a posição horizontal do player com base na velocidade
        this.position.x += this.velocity.x;
        // Atualiza a posição vertical do player com base na velocidade
        this.position.y += this.velocity.y;
       // Atualiza a parte inferior para refletir a nova posição
       this.sides.bottom = this.position.y + this.height;

        // Verifica se o player está acima da borda inferior do canvas
        if (this.sides.bottom + this.velocity.y < canvas.height) {
            // Aplica a gravidade para simular a queda
            this.velocity.y += this.gravity;
        } else {
            // Se o player atinge o chão, a velocidade vertical é zerada
            this.velocity.y = 0;
        }
    }
}