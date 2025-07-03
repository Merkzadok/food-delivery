import express from "express";
import { getFoodWithCategory } from "../controller/food/get-food-with-category.controller";

const foodWithCategory = express.Router();

foodWithCategory.get("/", getFoodWithCategory);

export default foodWithCategory;
