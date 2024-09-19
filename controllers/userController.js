import {
  postUser,
  getUsers,
  getUser,
  patchUser,
  deleteUser,
} from "../handlers/userHandlers.js";

export const createUser = async (req, res, next) => {
  const data = req.body;
  try {
    const user = await postUser(data);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const findUsers = async (req, res, next) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const findUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await getUser(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const user = await patchUser(id, data);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const removeUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await deleteUser(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
