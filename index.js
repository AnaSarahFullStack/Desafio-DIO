// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói
let nomeDoHero1 = "Flash"
let xpDoHero1 = 1000
let nivelDoHero1

// Estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
if (xpDoHero1 < 1000) {
    nivelDoHero1 = "Ferro"
}
// Se XP for entre 1.001 e 2.000 = Bronze
else if (xpDoHero1 >= 1001 && xpDoHero1 <= 2000) {
    nivelDoHero1 = "Bronze"
}
// Se XP for entre 2.001 e 5.000 = Prata
else if (xpDoHero1 >= 2001 && xpDoHero1 <= 5000) {
    nivelDoHero1 = "Prata"
}
// Se XP for entre 5.001 e 7.000 = Ouro
else if (xpDoHero1 >= 5001 && xpDoHero1 <= 7000) {
    nivelDoHero1 = "Ouro"
}
// Se XP for entre 7.001 e 8.000 = Platina
else if (xpDoHero1 >= 7001 && xpDoHero1 <= 8000) {
    nivelDoHero1 = "Platina"
}
// Se XP for entre 8.001 e 9.000 = Ascendente
else if (xpDoHero1 >= 8001 && xpDoHero1 <= 9000) {
    nivelDoHero1 = "Ascendente"
}
// Se XP for entre 9.001 e 10.000 = Imortal
else if (xpDoHero1 >= 9001 && xpDoHero1 <= 10000) {
    nivelDoHero1 = "Imortal"
}
// Se XP for maior ou igual a 10.001 = Radiante
else {
    nivelDoHero1 = "Radiante"
}

// Exibir mensagem final
console.log("O Herói de nome " + nomeDoHero1 + " está no nível de " + nivelDoHero1)