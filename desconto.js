// PEGA OS ELEMENTOS DECLARADOS NO NOTA.HTML ATRAVÉS DO SEU ID E GUARDA EM CONSTANTES
const inputValorCompra = document.getElementById("ValorCompra");
const btnCalcular = document.getElementById("btnCalcular");
const pResultado = document.getElementById("resultado");

// EVENTO DE CLIQUE EXECUTAR QUANDO O BOTÃO FOR CLICADO
btnCalcular.addEventListener("click", function () {
  // CONVERTE TEXT PARA NUMBER
  let ValorCompra = Number(inputValorCompra.value);

  let valor = ValorCompra * 0.9;


  if (ValorCompra >= 200) {
    let valorFinal = ValorCompra * 0.9;
    let desconto = ValorCompra * 0.1;
    pResultado.innerText = "Desconto APROVADO! Desconto: " + desconto;
    pResultado.innerText = "Valor com desconto: " + valorFinal;
    pResultado.style.color = "green";
  } else {
    pResultado.innerText = "Desconto NÃO APROVADO!";
    pResultado.style.color = "red";
  }
});