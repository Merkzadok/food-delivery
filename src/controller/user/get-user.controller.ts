import { Request, Response } from "express";
import User from "../../model/user";

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find().populate("orderedFoods");

    res.status(200).send({ success: true, users });
  } catch (error) {
    res.status(400).send({ message: "API error", error });
  }
};
