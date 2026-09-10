// PEGA OS ELEMENTOS DECLARADOS NO NOTA.HTML ATRAVÉS DO SEU ID E GUARDA EM CONSTANTES
const inputValorCompra = document.getElementById("ValorCompra");
const btnCalcular = document.getElementById("btnCalcular");
const pResultado = document.getElementById("resultado");

// EVENTO DE CLIQUE EXECUTAR QUANDO O BOTÃO FOR CLICADO
btnCalcular.addEventListener("click", function () {
  // CONVERTE TEXT PARA NUMBER
  let ValorCompra = Number(inputValorCompra.value);

  if (ValorCompra >= 200) {
    let valorFinal = ValorCompra * 0.9;
    let desconto = ValorCompra * 0.1;
    
    // Junta as mensagens com \n para quebrar a linha
    pResultado.innerText = "Desconto: R$" + desconto + " Valor com desconto: R$" + valorFinal;
    pResultado.style.color = "green";
  } else {
    pResultado.innerText = "Desconto NÃO APROVADO!";
    pResultado.style.color = "red";
  }
});