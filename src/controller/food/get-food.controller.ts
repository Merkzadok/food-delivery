import { Request, Response } from "express";
import Food from "../../model/food";

export const getFood = async (req: Request, res: Response) => {
  try {
    const foods = await Food.find().populate("category");

    res.status(200).send({ success: true, foods });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "API error", error });
  }
};
