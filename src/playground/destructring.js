// const person = {
//   name: 'Yuval',
//   age: 30,
//   location : {
//     city: 'Tel Aviv',
//     temp: 15
//   }
// };
//
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`)
//
// const { city, temp: temper } = person.location;
// if (city && temper)  {console.log(`its ${temper} in ${city}`)}

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-published' } = book.publisher;
//
// console.log(publisherName);

//
// Array destructring
//

const address = ['1299 S Juniper Street', 'Tel Aviv', 'Israel', '19147'];
const [, city , state = 'New Tork'] = address;
console.log(`You are in ${city} ${state}`)

const item = ['Cofee (iced)', '$2.00', '$2,50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`)
