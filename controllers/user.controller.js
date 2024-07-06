const getAllUsers = async (req, res) => {
  //   const result = await userCollection.find().toArray();
  res.send({ result: "user coming soon" });
};
const getAUsers = async (req, res) => {
  //   const result = await userCollection.find().toArray();
  res.send({ result: " one user coming soon" });
};

const createUser = async (req, res) => {
  const user = req.body;
  const query = { email: user.email };
  //   const existingUser = await userCollection.findOne(query);
  if (existingUser) {
    return res.status(401).send({ message: "user already axis" });
  }
  //   const result = await userCollection.insertOne(user);
  res.send(result);
};
const updateAUsers = async (req, res) => {
  //   const result = await userCollection.find().toArray();
  res.send({ result: " updateAUsers a user coming soon" });
};

const deleteAUser = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  // const result = await userCollection.deleteOne(query);
  res.send({ result: "this a single user" });
};

module.exports = {
  getAllUsers,
  getAUsers,
  createUser,
  updateAUsers,
  deleteAUser,
};
