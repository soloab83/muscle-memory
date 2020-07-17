// // 5 variables of different types
// //string
// //number
// //boolean
// //object (4 different key/value pairs) [string],[number], [array], [boolean]


// let saying = 'whats up';
// console.log(saying);

// let x = 25
// console.log(x)

// const cars = ['honda', 'ford', 'audi'];
// console.log(cars);

// let random = false;
// console.log(random);

// const broncos = {
//     location: 'Denver',
//     mascot: 'Bronco',
//     superbowls: 'three',
// }
// console.log(broncos);


// // make 10 different functions
// //one to pass an array
// //one to pass in a callback
// //one to pass string
// //one for boolean
// //rest random

// function coolCars(array) {
//     let resulst = [];
//     for (let i = 0; i < array.length; i++) {

//         if (cars.length > 4) {
//             result.push(cars);
//         }

//     }
//     return result;
// }
// console.log(coolCars(cars));





const sectionOne = document.getElementById('section-one');
console.log(sectionOne);
const sectionTwo = document.getElementById('section-two');
console.log(sectionTwo);
const sectionThree = document.querySelector('#section-three');
console.log(sectionThree);
const sectionFour = document.querySelector('#section-four');
console.log(sectionFour);
const sectionFive = document.querySelector('#section-five');
console.log(sectionFive);

sectionOne.textContent = 'Lakers';
sectionTwo.textContent = 'Nuggets';
sectionThree.textContent = 'warriors';
sectionFour.textContent = 'Rockets';
sectionFive.textContent = 'pelicans';


const paraOne = document.querySelector('.paragraph-one');
console.log(paraOne);
paraOne.textContent = 'Lebron James';

const paraTwo = document.querySelector('.paragraph-two');
console.log(paraTwo);
paraTwo.textContent = 'Jokic';

const paraThree = document.querySelector('.paragraph-three');
console.log(paraThree);
paraThree.textContent = 'Steph Curry';

const paraFour = document.querySelector('.paragraph-four');
console.log(paraFour);
paraFour.textContent = 'James Harden';

const paraFive = document.querySelector('.paragraph-five');
console.log(paraFive);
paraFive.textContent = 'Zion Williamson';

const containerSix = document.createElement('div');
containerSix.classList.add('container-six');
console.log(containerSix);

const sectionSix = document.createElement('h2');
console.log(sectionSix);

sectionSix.setAttribute('id', 'section-six');
sectionSix.textContent = 'Blazers';

const paraSix = document.createElement('p');
paraSix.classList.add('paragraph-six');
paraSix.textContent = 'Damian Lillard';
console.log(paraSix);

const body = document.querySelector('body');
console.log(body);

body.appendChild(containerSix);
containerSix.appendChild(sectionSix);
containerSix.appendChild(paraSix);

const containerSeven = document.createElement('div');
containerSeven.classList.add('container-seven');
console.log(containerSeven);

const sectionSeven = document.createElement('h2');
console.log(sectionSeven);

sectionSeven.setAttribute('id', 'section-seven');
sectionSeven.textContent = 'Spurs';

const paraSeven = document.createElement('p');
paraSeven.classList.add('paragraph-seven');
paraSeven.textContent = 'Demar DeRozan';
console.log(paraSeven);


body.appendChild(containerSeven);
containerSix.appendChild(sectionSeven);
containerSix.appendChild(paraSeven);
