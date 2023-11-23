function caixa(valorSaque) {
  const notas = [100, 50, 20, 10];
  let res = [];

  for (let nota of notas) {
    let quantNota = Math.floor(valorSaque / nota);
    valorSaque = valorSaque - Math.floor(valorSaque / nota) * nota;
    if (quantNota > 0) {
      res.push(
        quantNota +
          `${quantNota == 1 ? " nota" : "notas"} de R$` +
          nota.toFixed(2).replace(".", ",")
      );
    }
  }
  return res.join(" e ");
}

console.log(caixa(80));
