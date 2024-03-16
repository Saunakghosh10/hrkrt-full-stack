// callbacks ----------

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function quad(n) {
  return n * n * n * n;
}

function sumofsome(a, b, fn) {
  let square1 = fn(a);
  let square2 = fn(b);
  return square1 + square2;
}

// let ans = sumofsome(1, 2, quad);
// console.log(ans);

// let ans1 = sumofsome(1, 3, cube);
// console.log(ans1);

function sumofsomething(a, b, callbackfn) {
  let sum1 = callbackfn(a);
  let sum2 = callbackfn(b);
  return sum1 + sum2;
}
let ans2 = sumofsomething(1, 2, cube);
console.log(ans2);

function sum(a, b, fn) {
  let s1 = fn(a);
  let s2 = fn(b);
  return s1 + s2;
}
let ans3 = sum(1, 2, square);
console.log(ans3);

// async function --------

// promises

// setTimeout(function () {
//   console.log("ho");
// }, 1000);

// setTimeout(function () {
//   console.log("inside the second one");
// }, 500);

// function myownsettime(callback, duration) {
//   setTimeout(callback, duration);
// }

// function promisefieldmyowntime(duration) {
//   const p = new Promise();
//   return p;
// }

// myownsettime(function () {
//   console.log("after time");
// }, 1000);

// --------------
function ownsettime(callback, duration) {
  setTimeout(function () {
    callback();
  }, duration);
}
ownsettime(function () {}, 1000);

function promisefieldmyowntimed(duration) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), duration);
  });
  return p;
}

// calling a function ----------

const ans = promisefieldmyowntimed(1000);
ans.then(function () {
  console.log("timeout");
});

function mysetTimeout(fn, duration) {
  setTimeout(fn, duration);
}

mysetTimeout(function () {
  console.log("done");
}, 1000);
console.log("hello");
