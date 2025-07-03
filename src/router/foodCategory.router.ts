import express from "express";

import { createFoodCategory } from "../controller/foodCategory/post-category.controller";
import { getFoodCategory } from "../controller/foodCategory/get-category.controller";
import { getDeletedCategory } from "../controller/foodCategory/delete-category.controller";
import { updateCategory } from "../controller/foodCategory/update-category.controller";
import { getFoodCategoryById } from "../controller/foodCategory/get-category-by-id.controller";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/", createFoodCategory);

foodCategoryRouter.get("/", getFoodCategory);

foodCategoryRouter.get("/:id", getFoodCategoryById);

foodCategoryRouter.delete("/:foodCategoryId", getDeletedCategory);

foodCategoryRouter.put("/:foodCategoryId", updateCategory);

export default foodCategoryRouter;
