const User = require("../models/user.model");
const { v4: uuidV4 } = require("uuid");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};
const getAUsers = async (req, res) => {
  //   const result = await userCollection.find().toArray();
  try {
    const users = await User.findOne({ id: req.params.id });
    res.send(users);
  } catch (error) {
    res.send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidV4(),
      name: req.body.name,
      age: req.body.age,
    });
    await newUser.save();
    //   const query = { email: user.email };
    //   const existingUser = await userCollection.findOne(query);
    //   if (existingUser) {
    //     return res.status(401).send({ message: "user already axis" });
    //   }
    //   const result = await userCollection.insertOne(user);
    res.json(newUser);
  } catch (error) {
    res.send(error.message);
  }
};
const updateAUsers = async (req, res) => {
  //   const result = await userCollection.find().toArray();
  try {
    const user = await User.findOne({ id: req.params.id });
    user.name = req.body.name;
    user.age = Number(req.body.age);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.send(error.message);
  }
};

const deleteAUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.send({ message: "user is deleted" });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getAUsers,
  createUser,
  updateAUsers,
  deleteAUser,
};
