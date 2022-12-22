const axios = require('axios');
// const { URL, URLSearchParams } = require('url');

const url = 'https://jsonplaceholder.typicode.com/posts';
const params = { userId: 1, _start: 0, _limit: 3 };

axios
  .request({ url, params })
  .then((response) => console.log(response.data))
  .catch(console.error);

const searchParams = new URLSearchParams(params);
searchParams.set('_start', 3);
console.log('searchParams.toString():', searchParams.toString());

const myUrl = new URL(
  'https://jsonplaceholder.typicode.com/posts?' + searchParams
);
console.log('new URL().searchParams:', myUrl.searchParams);

axios
  .get(myUrl)
  .then((response) => console.log(response.data))
  .catch(console.error);
