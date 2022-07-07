const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
  const { name, points } = req.body;
  console.log('xxxxxxxxxxxx');
  if (!name) {
    res.status(400).send({ name, message: 'Please enter Name' });
  }
  const userExists = await User.findOne({ name });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const user = await User.create({
    name,
    points,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
    });
  } else {
    res.status(400);
    throw new Error('User not created invalid data');
  }
  res.send('User created');
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

module.exports = {
  registerUser,
  getAllUsers,
};
