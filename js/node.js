setTimeout(() => {
  console.log("hey dear");
}, 1500);

console.log("saunak");

function promisefieldmyowntimed(duration) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), duration);
  });
  return p;
}
