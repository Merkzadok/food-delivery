import { Request, Response } from "express";
import Food from "../../model/food";

export const updateFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const { foodName, price, ingredients } = req.body;

  try {
    const updatedFood = await Food.findByIdAndUpdate(foodId, {
      foodName,
      price,
      ingredients,
    });

    res.status(200).send({
      success: true,
      message: `${updatedFood?.foodName} changed to ${foodName}  `,
      updatedFood,
    });
  } catch (error) {
    res.status(400).send({ message: "API error", error });
  }
};
