import express from "express";
import { ProductModel } from "../models/product.model.js";
const productRouter = express.Router();

//CREATE
productRouter.post("/", async (req, res) => {
  try {
    const createdProduct = await ProductModel.create(req.body);

    return res.status(201).json(createdProduct);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

//READ
productRouter.get("/", async (req, res) => {
  try {
    const allProducts = await ProductModel.find();

    return res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);

    return res.json(error);
  }
});

//READ DETAILS

productRouter.get("/:id", async (req, res) => {
  try {
    const product = await ProductModel.findOne({ _id: req.params.id });

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

//UPDATE

productRouter.put("/:id", async (req, res) => {
  try {
    const editProduct = await ProductModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json(editProduct);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

//DELETE

productRouter.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await ProductModel.deleteOne({ _id: req.params.id });

    return res.status(200).json(deletedProduct);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

export { productRouter };
