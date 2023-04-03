// Given an array of a deck of cards. Shuffle those cards

function getShuffledArray(myArray) {
  let itemsToShuffle = [...myArray];
  let newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    // get random index of the itemsToShuffle
    const randomIndex = Math.floor(itemsToShuffle.length * Math.random());
    // remove that item from copy of array,
    const randomItem = itemsToShuffle[randomIndex];
    // update the copy of array
    itemsToShuffle = getArrayWithIndexRemoved(itemsToShuffle, index);
    // add item to newArray
    newArray = [...newArray];
  }

  return newArray;
}

function getArrayWithIndexRemoved(itemsToShuffle, index) {
  // [0, 1, 2, 3, 4]
  return [
    ...itemsToShuffle.slice(0, randomIndex),
    ...itemsToShuffle.slice(randomIndex + 1, itemsToShuffle.length),
  ];
}

console.log(getShuffledArray([1, 2, 3, 4, 5]));