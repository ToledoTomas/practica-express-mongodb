import User from "../models/User.js";

export const postUser = async data => {
  const { name, email, password } = data;
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }
  const userFound = await User.findOne({ email });
  if (userFound) {
    throw new Error("User already exists");
  }
  const newUser = await User.create(data);
  return newUser;
};

export const getUsers = async () => {
  const users = await User.find();
  return users;
};

export const getUser = async id => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const patchUser = async (id, data) => {
  const { name, password } = data;
  const user = getUser(id);
  const result = (await user).updateOne({ name, password });
  return result;
};

export const deleteUser = async id => {
  const user = getUser(id);
  const result = (await user).deleteOne();
  return result;
};
