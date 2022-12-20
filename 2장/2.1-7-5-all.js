function delayed(value, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}
console.time('Promise.all()');
const promise1 = delayed('성공1', 1000);
const promise2 = delayed('성공2', 2000);
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); // ['성공1', '성공2'];
  })
  .catch((error) => {
    console.error(error);
  });
