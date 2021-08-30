function somaSubtracao(num1, num2, somaSubtracao) {
    if (somaSubtracao == "+") {
        return num1 + num2;
    } else if (somaSubtracao == "-") {
        return num1 - num2;
    } else {
        return "nenhuma das opções";
    }
}

console.log(somaSubtracao(3, 6, '+'));
console.log(somaSubtracao(3, 6, '-')); 
console.log(somaSubtracao(3, 6));