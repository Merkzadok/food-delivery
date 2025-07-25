import { Request, Response } from "express";
import User from "../../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await new User({
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      address: address,
      // orderedFoods: orderedFoods,
      // ttl: ttl,
    }).save();

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const data = { userId: user._id, role: user.role, email: user.email };

      const secret = "super-secret-123";

      const hour = Math.floor(Date.now() / 1000) + 60 * 60;

      const accessToken = jwt.sign({ exp: hour, data }, secret);

      res.status(200).json({ success: true, accessToken });
    } else {
      res.status(400).json({ message: "try again 2 " });
    }

    res.status(200).send({ success: true, user });
  } catch (error) {
    res.status(400).send({ message: "API error", error });
  }
};
