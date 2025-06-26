import { Request, Response } from "express";
import foodOrder from "../../model/foodOrder";

export const createOrder = async (req: Request, res: Response) => {
  const { user, totalPrice } = req.body;

  try {
    const order = await new foodOrder({
      user: user,
      totalPrice: totalPrice,
    }).save();
    res.status(200).send({ success: true, order });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
