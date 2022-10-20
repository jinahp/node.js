function longRunningTask() {
  for (let i = 0; i < 999999; i++);
  console.log('작업 끝');
}
console.log('시작');
longRunningTask();
console.log('다음 작업');