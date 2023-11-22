const terras = [-3, -3];
let anteriorDiferente = undefined;
let castelo = 0;

function castelos(terras) {
  for (let i = 0; i < terras.length; i++) {
    // verifico se meu anterior é igual ao atual para savar o anterior que é diferente
    if (terras[i] != terras[i - 1]) {
      anteriorDiferente = terras[i - 1];
    }
    //para caso meu promixo for igual nao fazer nada
    if (terras[i] == terras[i + 1] && i != terras.length) {
    } else if (
      // vales
      (anteriorDiferente > terras[i] ||
        i == 0 ||
        anteriorDiferente == undefined) &&
      (terras[i + 1] > terras[i] || terras[i + 1] == undefined) // para quando estiver no final e for undefined o proximo elemento
    ) {
      castelo++;
    } else if (
      // montanhas
      (anteriorDiferente < terras[i] || i == 0) &&
      (terras[i + 1] < terras[i] || terras[i + 1] == undefined)
    ) {
      castelo++;
    }
  }
  return "castelos " + castelo;
}

console.log(castelos(terras));
