let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };/* primeiro cria uma variavel e coloca entre chaves todas as propriedades
  e em seguida no for in, que percorre pelo indice enquanto o for of percorre os valores  */
  for (index in car){
    console.log("primeiro a sua chave:"+ " "+index," "+"e segundo sua propriedade:"+" "+car[index])
  }
  