import { Request, Response } from "express";
import Food from "../../model/food";

export const getDeletedFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;

  try {
    const deletedFood = await Food.findByIdAndDelete(foodId);

    res.status(200).send({
      success: true,
      message: `${deletedFood?.foodName} deleted successfully`,
    });
  } catch (error) {
    res.status(400).send({ message: "API error", error });
  }
};
