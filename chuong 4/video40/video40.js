console.log("hello");

const scores = [10, 8, 3, 7, 5, 5];

scores.forEach((element, index) => {
  console.log(element, index);
});
console.log("---------------------");

const arr2 = scores.map((value, index) => {
  return value * 2;
});

console.log(arr2)
