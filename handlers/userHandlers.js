import User from "../models/User.js";
import Role from "../models/Role.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const postUser = async data => {
  const { name, email, password, roles } = data;
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }
  const userFound = await User.findOne({ email });
  if (userFound) {
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    name,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const roleFound = await Role.findOne({ name: { $in: roles } });
    newUser.roles = roleFound.map(role => {
      role.id;
    });
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  const token = jwt.sign({ email: newUser.email }, process.env.SECRET_JWT, {
    expiresIn: "24h",
  });

  return { newUser: newUser, token: token };
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
