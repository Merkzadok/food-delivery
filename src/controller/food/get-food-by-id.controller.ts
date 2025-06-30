import { Request, Response } from "express";
import Food from "../../model/food";

export const getFoodById = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  try {
    const food = await Food.findById(foodId).populate("category");

    res.status(200).send({ success: true, food });
  } catch (error) {
    res.status(400).send({ message: "API error", error });
  }
};
