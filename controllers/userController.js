import { postUser } from "../handlers/userHandlers.js";
export const createUser = async (req, res, next) => {
  const data = req.body;
  try {
    const user = await postUser(data);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
