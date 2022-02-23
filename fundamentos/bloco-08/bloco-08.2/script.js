const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];
//passando spread como parametro da funçao

console.log(imc(...patientInfo)); 


const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
//usando spread em com max e min
console.log(Math.max(...randomNumbers)); 
console.log(Math.min(...randomNumbers)); 

const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  //utilizando spread para concatenar objetos
  
  const customer = { ...people, ...about };
  console.log(customer); 


  // Faça uma lista com as suas frutas favoritas
const specialFruit = ['maracuja', 'pera', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'chocolate', 'chantily'];

const fruitSalad = (fruit, additional) => {
  return [...fruit,'morango','granola',...additional]
};
//ou assim 
//const fruitSalad = (fruit, additional) => [...fruit,'morango','granola',...additional];

console.log(fruitSalad(specialFruit, additionalItens));