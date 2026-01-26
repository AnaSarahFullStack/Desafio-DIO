let lines = gets().trim();

const tipo = lines;
let contador = 0;

while (true) {
  let linha = gets();

  if (linha === "FIM") {
    break;
  }

  if (linha.startsWith(tipo + ":")) {
    contador++;
  }
}

print(contador);
