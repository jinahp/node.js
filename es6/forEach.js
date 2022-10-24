const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));


/* for 반복문을 forEach()로 바꾸기 */
const items = ['item1', 'item2', 'item3'];
const copy = [];

for(let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}

items.forEach((item) => copy.push(item));

console.log(copy);
