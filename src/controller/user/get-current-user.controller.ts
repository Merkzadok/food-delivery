import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { verify } from "../../utils/token";
import User from "../../model/user";

export const getCurrentUser = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new Error("Authorization not found");
  }
  const token = authHeader?.split(" ")[1] || "";

  try {
    const isVerified = verify(token);

    const user = await User.findOne({ _id: isVerified.data.userId });

    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json("User not found");
  }
};
