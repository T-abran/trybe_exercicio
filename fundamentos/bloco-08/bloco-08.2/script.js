const persons = [
    {
        name: 'tiago',
        years: 20,
        city: 'neves',
    },
 {
    name: 'marcus',
    years: 18,
    city: 'lagoa',
 },
 {
    name: 'ray',
    years: 19,
    city: 'castelo',

 },
 {
    name: 'brunna',
    years:17,
    city:'neves',
 }
];

const numbers = [1, 2, 3, 5, 7, 23, 12];

const multipliesFor2 = (element) => {
    console.log(`${element} * 2: ${element * 2}`);
  };
  
  numbers.forEach(multipliesFor2);