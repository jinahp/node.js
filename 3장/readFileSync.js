const fs = require('rs');

try {
  let data = fs.readFileSync('./readme.txt');
  console.log(data);
  console.log(data.toString());
} catch (err) {
  console.error(err);
}
