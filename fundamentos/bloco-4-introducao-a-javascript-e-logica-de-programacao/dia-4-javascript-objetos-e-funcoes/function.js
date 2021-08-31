function checkPalindrome(str){
    let reversed = str.split("").reverse().join("")
    return str === reversed
  }
/* criei uma função, com nome checkPalindrome com um parametro (str)
criei uma variavel reversed com valo do, "split" que muda a string 
para um array, depois inverto ela com o "reverse", depois transformo o array em string com o "join"
apos isso retorna uma comparaçao se "str" é igual a "reversed"  */
  
  console.log(checkPalindrome("ana"));
  
  console.log(checkPalindrome("luz azul"));
  
  console.log(checkPalindrome("subinoonibus"));