
function executaOperacao(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
  }
  function soma(numero1, numero2) {
    return numero1 + numero2;
  }
  function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
  }
  console.log(executaOperacao(1, 1, soma)); 
  console.log(executaOperacao(2, 2, multiplicacao)); 