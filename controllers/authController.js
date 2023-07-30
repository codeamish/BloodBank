const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const correctPassword = require("../utils/checkPassword");




const signInToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createAndSendToken = (User, statusCode, res) => {
  const token = signInToken(User._id);
  // const cookieOptions = {
  //   expires: new Date(
  //     Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
  //   ),
  //   httpOnly: true,
  // };
  // if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token);

  // remove password from output

  console.log(token);
  User.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      User,
    },
  });
};

exports.signup = async (req, res) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
    password: req.body.password,
    bloodGroup: req.body.bloodGroup,
  });

    createAndSendToken(newUser, 201, res);
};


exports.login = async (req, res) => {

    const {email,password}  = req.body;

    // 1) Check if email and password exist
    if(!email || !password){
        return res.status(400).json({
            status: 'fail',
            message: 'Please provide email and password'
        });
    }

    const user = await User.findOne({email});
    // if(!user || !(await user.correctPassword(password, user.password))){
    //     return res.status(401).json({
    //         status: 'fail',
    //         message: 'Incorrect email or password'
    //     });
    // }
    if(!user || !(await correctPassword(password, user.password))){
        return res.status(401).json({
            status: 'fail',
            message: 'Incorrect email or password'
        });
    }

    createAndSendToken(user, 200, res);
}
