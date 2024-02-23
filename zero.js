let array = [0, 1, 2, 4, 0, 0, 5, 7, 8, 0];

function moveZeroToTheEnd(array) {
  let nonZeroNumbers = [];
  let zeroCount = 0;

  for (let number of array) {
    if (number !== 0) {
      nonZeroNumbers[nonZeroNumbers.length] = number;
    } else {
      zeroCount++;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    nonZeroNumbers[nonZeroNumbers.length] = 0;
  }
  return nonZeroNumbers;
}

console.log(moveZeroToTheEnd(array));
