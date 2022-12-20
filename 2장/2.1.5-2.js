const status = {
  name: 'node',
  count: 5,
};

const candyMachine = {
  status,
  // getCandy = (n = 1) => {
    getCandy(n = 1) {
      status.count -= n;
      return status.count;
    },
  };

const { getCandy, status: { count } } = candyMachine;
//getCandy = getCandy.bind(candyMachine);

console.log({ count });
console.log(getCandy.call(candyMachine, 2)); // 가변 파라미터
//console.log(getCandy.apply(candyMachine, [2])); // 파라미터 배열