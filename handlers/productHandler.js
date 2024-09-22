import Product from "../models/Product.js";

export const postProduct = async data => {
  const { name, price, image } = data;
  if (!name || !price || !image) {
    throw new Error("All fields are required");
  }
  const productFound = await Product.findOne({ name });
  if (productFound) {
    throw new Error("Product already exists");
  }
  const newProduct = await Product.create(data);
  const productSaved = await newProduct.save();
  return productSaved;
};

export const getProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getProduct = async id => {
  const product = await Product.findOne({ _id: id });
  if (!product) throw new Error("Product not found");
  return product;
};

export const patchProduct = async (id, data) => {
  const { name, price, image } = data;
  const product = await getProduct(id);
  const result = await product.updateOne({ name, price, image });
  return result;
};

export const deleteProduct = async id => {
  const product = await getProduct(id);
  const result = await product.deleteOne();
  return result;
};
