var candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy: function (n) {
    this.status.count -= n || 1;
    return this.status.count;
  },
};
var getCandy = candyMachine.getCandy.bind(candyMachine);
var count = candyMachine.status.count;

// getCandy();
console.log({ count: count });
console.log(getCandy(2));
