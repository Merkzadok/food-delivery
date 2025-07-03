import express from "express";
import chalk from "chalk";
import cors from "cors";

import { connectDb } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";
import foodRouter from "./router/food.router";
import userRouter from "./router/user.router";
import foodOrderRouter from "./router/foodOrder.router";
import foodWithCategory from "./router/foodWithCategory";

const port = 4200;
const app = express();
app.use(express.json());

app.use(cors());

app.use("/food-category", foodCategoryRouter);

app.use("/food", foodRouter);

app.use("/user", userRouter);

app.use("/food-order", foodOrderRouter);

app.use("/foodwith", foodWithCategory);

app.listen(port, async () => {
  await connectDb();
  console.log(
    chalk
      .rgb(255, 136, 0)
      .bold.underline(`Example app listening on port http://localhost:${port}`)
  );
});
