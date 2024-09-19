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
