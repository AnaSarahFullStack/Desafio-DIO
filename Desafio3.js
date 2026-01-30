// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // deixa minúsculo para padronizar
    }

    atacar() {
        let ataque = "";

        // Define o ataque de acordo com o tipo
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

        // Exibe a mensagem final
        console.log(`${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso:
const heroi1 = new Heroi("Gandalf", 150, "mago");
heroi1.atacar(); // mago atacou usando magia

const heroi2 = new Heroi("Ragnar", 30, "guerreiro");
heroi2.atacar(); // guerreiro atacou usando espada

const heroi3 = new Heroi("Shinobi", 25, "ninja");
heroi3.atacar(); // ninja atacou usando shuriken

const heroi4 = new Heroi("Liang", 40, "monge");
heroi4.atacar(); // monge atacou usando artes marciais
