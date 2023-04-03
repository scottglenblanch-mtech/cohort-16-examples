// Given an array of a deck of cards. Shuffle those cards

function getShuffledArray(myArray) {
  let itemsToShuffle = [...myArray];
  let newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    // remove last item in array
    // update the itemsToShuffle array
    const lastItem = itemsToShuffle.pop();
    newArray.push(lastItem)
    itemsToShuffle.reverse()
  }

  return newArray;
}

console.log(getShuffledArray([1, 2, 3, 4, 5]));