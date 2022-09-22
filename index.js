import express from "express";
import * as dotenv from "dotenv";
import { dbConnection } from "./config/db.config.js";
import { productRouter } from "./routes/product.routes.js";

dotenv.config();

dbConnection();
const app = express();

app.use(express.json());

app.use("/product", productRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
