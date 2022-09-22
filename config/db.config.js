import mongoose from "mongoose";

export async function dbConnection() {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(connection.connection.name);
  } catch (erro) {
    console.log(erro);
  }
}
