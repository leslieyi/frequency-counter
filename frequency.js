//function called Same, which accepts two arrays. The function should return true if every value in the first array has corresponding value SQUARED in the second array
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let val of arr1) {
    counter1[val] ? +1 : 0;
  }
  for (let val of arr2) {
    counter2[val] ? +1 : 0;
  }

  for (let key in counter1) {
    if (!(key ** 2 in counter2)) return false;
    if (counter2[key ** 2] !== counter1[key]) return false;
  }
  return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));
