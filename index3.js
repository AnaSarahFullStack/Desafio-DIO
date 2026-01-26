// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

// Lê o comando do usuário
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário
// - "print": imprime
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário
// - "print": imprime um texto de saída (output) e pula uma linha
// Abaixo segue um exemplo de código que você pode ou não utilizar
// Lê o comando enviado ao chatbot

const comando = gets();

// TODO: Implemente a lógica do programa utilizando switch/case

switch (comando) {
    case "horario":
        print("Atendemos das 8h as 18h");
        break;
    case "telefone":
        print("Nosso telefone e 4002-8922");
        break;
    case "servicos":
        print("Oferecemos suporte, vendas e consultoria");
        break;
    default:
        print("Comando invalido");
        break;
}