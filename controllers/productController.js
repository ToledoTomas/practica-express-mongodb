import {
  getProduct,
  getProducts,
  postProduct,
  patchProduct,
  deleteProduct,
} from "../handlers/productHandler.js";

export const createProduct = async (req, res, next) => {
  const data = req.body;
  try {
    const product = await postProduct(data);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const findProducts = async (res, req, next) => {
  try {
    const products = await getProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const findProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await getProduct(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const product = await patchProduct(id, data);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const removeProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await deleteProduct(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
