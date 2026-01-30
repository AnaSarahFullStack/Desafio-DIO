// Função que calcula o saldo e retorna o nível
function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Define o nível conforme a quantidade de vitórias
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna a mensagem final
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplos de teste
console.log(calcularRank(5, 2));    // Ferro
console.log(calcularRank(15, 5));   // Bronze
console.log(calcularRank(35, 10));  // Prata
console.log(calcularRank(60, 20));  // Ouro
console.log(calcularRank(85, 10));  // Diamante
console.log(calcularRank(95, 10));  // Lendário
console.log(calcularRank(110, 5));  // Imortal
