const despertador = () => {return 'Acordando!!'};

const cafe = () => {return 'Bora tomar café!!'};

const mimi = () => {return 'Partiu dormir!!'}

const doingThings = (nomeDaFunçao) =>{
     return nomeDaFunçao()
}
// Ao chamar a função doingThings:
console.log(doingThings(despertador));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
console.log(' ');
console.log(despertador());
console.log(' ');
console.log(cafe());
console.log(' ');
console.log(mimi());