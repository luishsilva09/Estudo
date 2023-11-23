function caixa(valorSaque) {
  const notas = [100, 50, 20, 10];
  let res = [];

  for (let nota of notas) {
    //pego o valor inteiro da divisao comecando pela maior nota para ter quantidade de notas
    let quantNota = Math.floor(valorSaque / nota);
    // faco com que meu valor de saque seja subitraido pela quantidade de notas vezes valor da cedula
    valorSaque = valorSaque - Math.floor(valorSaque / nota) * nota;

    //para caso minha quantidade de nota se zero nao contabilizar na resposta
    if (quantNota > 0) {
      res.push(
        quantNota +
          `${quantNota == 1 ? " nota" : " notas"} de R$` +
          nota.toFixed(2).replace(".", ",") //deixar no formato 40,00
      );
    }
  }
  //caso apos rodar tudo ainda tiver um valor de saque possivemente o valor da cedula nao existe
  if (valorSaque > 0) {
    return `Erro: Não possuimos cédula de R$ ${valorSaque.toFixed(2)}`;
  }
  return res.join(" e ");
}

console.log(caixa(1000));
