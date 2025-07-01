import express from "express";
import { createFood } from "../controller/food/post-food.controller";
import { getFood } from "../controller/food/get-food.controller";
import { getFoodById } from "../controller/food/get-food-by-id.controller";
import { updateFood } from "../controller/food/update-food.controller";
import { getDeletedFood } from "../controller/food/delete-food.controller";

const foodRouter = express.Router();

foodRouter.post("/", createFood);

foodRouter.get("/:foodId", getFoodById);

foodRouter.put("/:foodId", updateFood);

foodRouter.delete("/:foodId", getDeletedFood);

foodRouter.get("/", getFood);

export default foodRouter;
