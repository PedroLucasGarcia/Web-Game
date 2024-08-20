class Sprite {
    // O construtor da classe recebe um objeto contendo a posição e a fonte da imagem
    constructor({ position, imageSrc }) {
        // Atribui a posição do sprite à propriedade 'position'
        this.position = position
        
        // Cria um novo objeto Image para armazenar a imagem do sprite
        this.image = new Image()

        // Define uma função a ser executada quando a imagem for carregada
        this.image.onload = () => {
            // Define a propriedade 'loaded' como true quando a imagem é carregada
            this.loaded = true
        }

        // Define o caminho da imagem (source) a ser carregada
        this.image.src = imageSrc

        // Inicialmente, define a propriedade 'loaded' como false, pois a imagem ainda não foi carregada
        this.loaded = false
    }

    // Método para desenhar o sprite na tela
    draw() {
        // Se a imagem ainda não foi carregada, sai do método e não desenha nada
        if (!this.loaded) return

        // Desenha a imagem na tela, na posição especificada por 'this.position'
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}