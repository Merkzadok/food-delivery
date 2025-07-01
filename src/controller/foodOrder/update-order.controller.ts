import { Request, Response } from "express";
import foodOrder from "../../model/foodOrder";

export const updateOrder = async (req: Request, res: Response) => {
  const { orderId } = req.params;
  const { totalPrice } = req.body;
  try {
    const updatedOrder = await foodOrder.findByIdAndUpdate(orderId, {
      totalPrice,
    });
    res.status(200).send({ success: true, updatedOrder });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
