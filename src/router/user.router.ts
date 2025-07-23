import express from "express";
import { createUser } from "../controller/user/post-user.controller";
import { getUser } from "../controller/user/get-user.controller";
import { getUserById } from "../controller/user/get-user-by-id.controller";
import { deleteUserById } from "../controller/user/delete-user.controller";
import { updateUser } from "../controller/user/update-user.controller";
import { login } from "../controller/user/login.controller";

const userRouter = express.Router();

userRouter.post("/", createUser);

userRouter.get("/", getUser);

userRouter.get("/:userId", getUserById);

userRouter.delete("/:userId", deleteUserById);

userRouter.put("/:userId", updateUser);

userRouter.post("/login", login);

export default userRouter;
