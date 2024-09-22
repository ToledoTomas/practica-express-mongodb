import { signIn } from "../handlers/loginHandler.js";

export const loginUser = async (req, res, next) => {
  const data = req.body;
  try {
    const user = await signIn(data);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
