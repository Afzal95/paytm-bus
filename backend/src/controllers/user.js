const user = require("../models/user");

// will add user if custmer with that email does not exist
exports.addNewuser = async (req, res) => {
  let email = req.body.email;
  let existinguser = await user.findOne({ email: email }).lean().exec();
  if (existinguser) {
    res.send(existinguser);
  } else {
    let newuser = await user.create(req.body);
    res.send(newuser);
  }
};
