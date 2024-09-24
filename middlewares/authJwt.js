import { config } from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/User";
import Role from "../models/Role";

config();

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    console.log(token);

    if (!token) return res.status(403).json({ error: "Token not found" });

    const decoded = jwt.verify(token, process.env.SECRET_JWT);
    req.userId = decoded.id;

    const user = User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ error: "User not found" });

    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);

  const rol = await Role.find({ _id: { $in: user.roles } });

  for (let i = 0; i < rol.length; i++) {
    if (rol[i].name === "admin") {
      next();
      return;
    }
  }

  return res.status(403).json({ error: "Require Admin Role" });
};
