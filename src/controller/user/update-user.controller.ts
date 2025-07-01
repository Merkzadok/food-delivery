import { Request, Response } from "express";
import User from "../../model/user";

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { email, phoneNumber, address } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      email,
      phoneNumber,
      address,
    });
    res.status(200).send({ success: true, updatedUser });
  } catch (error) {
    res.status(400).send({ message: "api error ", error });
  }
};
