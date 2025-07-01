import { Request, Response } from "express";
import FoodCategory from "../../model/foodCategory";

export const updateCategory = async (req: Request, res: Response) => {
  const { foodCategoryId } = req.params;
  const { categoryName } = req.body;

  try {
    const updatedCategory = await FoodCategory.findByIdAndUpdate(
      foodCategoryId,
      {
        categoryName,
      }
    );

    res.status(200).send({
      success: true,
      message: `${updatedCategory?.categoryName} changed to ${categoryName}  `,
      updatedCategory,
    });
  } catch (error) {
    res.status(400).send({ message: "API error", error });
  }
};
