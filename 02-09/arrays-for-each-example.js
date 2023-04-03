/*
- Create an array of numbers
- with an array.forEach log out the following
  - if the number is even, log out --- <number> is even
  - if the number is odd, log out --- <number> is odd
*/


const numbersArray = [1, 2, 5, 4, 30];

numbersArray.forEach(number => {

    if(number % 2 === 0) {
        console.log(number + ' is even')
    } else {
        console.log(number + ' is odd')
    }
})