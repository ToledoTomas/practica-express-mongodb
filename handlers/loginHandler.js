import User from "../models/User";
import { config } from "dotenv";

config();

export const signIn = async data => {
  const { email, password } = data;

  const userFound = await User.findOne({ email }).populate("roles");

  if (userFound) throw new Error("User already exists");

  const matchPassword = await User.comparePassword(
    password,
    userFound.password,
  );

  if (!matchPassword) {
    throw new Error("Incorrect password");
  }

  const token = jwt.sign({ id: userFound._id }, process.env.SECRET, {
    expiresIn: 60 * 60 * 24,
  });

  return { User: userFound, token: token };
};
