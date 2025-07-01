import express from "express";
import { createOrder } from "../controller/foodOrder/post-order.controller";
import { getOrder } from "../controller/foodOrder/get-order.controller";
import { getOrderById } from "../controller/foodOrder/get-order-by-id.controller";
import { deleteOrder } from "../controller/foodOrder/delete-order.controller";
import { updateOrder } from "../controller/foodOrder/update-order.controller";

const foodOrderRouter = express.Router();

foodOrderRouter.post("/", createOrder);

foodOrderRouter.get("/", getOrder);

foodOrderRouter.get("/:orderId", getOrderById);

foodOrderRouter.delete("/:orderId", deleteOrder);

foodOrderRouter.put("/:orderId", updateOrder);

export default foodOrderRouter;
