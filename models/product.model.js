import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true, minLength: 3 },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ["Entrada", "Prato principal", "Sobremesa"],
    required: true,
  },
  img: {
    type: String,
    default:
      "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2021/04/frango-assado-em-pe.jpg?x41527",
  },
});

export const ProductModel = model("Product", productSchema);
