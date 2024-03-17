// map
const input = [1, 2, 3, 4, 5];

// uglyway --
// const newarray = [];

// for (let i = 0; i < input.length; i++) {
//   newarray.push(input[i] * 2);
// }
// console.log(newarray);

// other soln

function transform(i) {
  return i * 3;
}
function multi(i) {
  return i + 5;
}
const ans8 = input.map(multi);
console.log(ans8);
const ans = input.map(transform);
console.log(ans);

function transformation(n) {
  return n * 2;
}

const int = [2, 3, 4, 5, 6];

const ans2 = int.map(transformation);
console.log(ans2);

// filter
const ans3 = int.filter((n) => {
  return n % 2 === 0;
});
console.log(ans3);
const ans4 = int.filter((n) => {
  return n % 3 === 0;
});
console.log(ans4);
const int1 = [2, 6, 9, 15, 18, 21, 24, 36, 75, 64, 24];
const ans5 = int1.filter((n) => {
  return n % 3 === 0;
});
console.log(ans5);

function filterlogic(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const ans6 = int.filter(filterlogic);
console.log(ans6);

// right way
const ans7 = int.filter(function (n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans7);

const arr = ["saunak", "ghosh"];

const ans9 = arr.filter(function (n) {
  if (n.startsWith("s")) {
    return true;
  } else {
    return false;
  }
});
console.log(ans9);
