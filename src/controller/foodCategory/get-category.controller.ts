import { Request, Response } from "express";

import FoodCategory from "../../model/foodCategory";

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const foodCategories = await FoodCategory.find();

    res.status(200).send({ success: true, foodCategories });
  } catch (error) {
    res.status(400).send({ message: "API error", error });
  }
};
