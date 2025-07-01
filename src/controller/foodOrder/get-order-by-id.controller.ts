import { Request, Response } from "express";
import foodOrder from "../../model/foodOrder";

export const getOrderById = async (req: Request, res: Response) => {
  const { orderId } = req.params;

  try {
    const order = await foodOrder.findById(orderId).populate({
      path: "foodOrderItems",
      populate: { path: "food" },
    });

    res.status(200).send({ success: true, order });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
