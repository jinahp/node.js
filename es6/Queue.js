let queue = [];
let front = -1;
let rear = -1;

// add, delete 대신 push? pop을 사용하기도 한다.

function queueAdd(value) {
    rear += 1;
    queue[rear] = value;
}

function queueDelete() {
    if (rear > front) {
        front += 1;
        return queue[front] // return 해버리면 접근을 안할 것이다. 그래서 따로 지우는 것은 안하겠다.
    }
    throw Error('The Queue is empty.');
}

queueAdd(4);
queueAdd(6);
queueAdd(1);
let data = queueDelete();
console.log(data);  // 먼저 넣은 값이 먼저 출력된다.
console.log(queueDelete());
console.log(queueDelete()); // 비어있으므로 위에 throw에서 설정한 'The Queue is empty.' 에러가 뜰 것이다.

if (queueLen() > 0) { // is not empty
  console.log(queueDelete());
} else {
  console.warn('The queue is empty.');
}
