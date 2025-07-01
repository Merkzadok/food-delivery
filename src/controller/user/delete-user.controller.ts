import { Request, Response } from "express";
import User from "../../model/user";

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await User.findByIdAndDelete(userId);

    res.status(200).send({ success: true, user });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
