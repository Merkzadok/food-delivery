import { Request, Response } from "express";
import foodOrder from "../../model/foodOrder";

export const getOrder = async (req: Request, res: Response) => {
  try {
    const order = await foodOrder.find().populate("user");

    res.status(200).send({ success: true, order });
  } catch (error) {
    res.status(400).send({ message: "api error ", error });
  }
};
