import { Request, Response } from "express";
import foodOrder from "../../model/foodOrder";

export const deleteOrder = async (req: Request, res: Response) => {
  const { orderId } = req.params;
  try {
    const deletedOrder = await foodOrder.findByIdAndDelete(orderId);
    res.status(200).send({ success: true, deletedOrder });
  } catch (error) {
    res.status(400).send({ message: "api-error", error });
  }
};
