import { Request, Response } from "express";
import FoodCategory from "../../model/foodCategory";

export const getFoodCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const foodCategories = await FoodCategory.findById(id);

    res.status(200).send({ success: true, foodCategories });
  } catch (error) {
    res.status(400).send({ message: "API error", error });
  }
};
