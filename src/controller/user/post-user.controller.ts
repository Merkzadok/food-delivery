import { Request, Response } from "express";
import User from "../../model/user";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address, orderedFoods, ttl, role } =
    req.body;
  try {
    const user = await new User({
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
      orderedFoods: orderedFoods,
      ttl: ttl,
      role: role,
    }).save();

    res.status(200).send({ success: true, user });
  } catch (error) {
    res.status(400).send({ message: "API error", error });
  }
};
