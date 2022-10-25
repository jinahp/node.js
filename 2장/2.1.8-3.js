async function findAndSaveUser(Users) {
  try {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm'});
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}
findAndSaveUser(require('./Users.js'));
