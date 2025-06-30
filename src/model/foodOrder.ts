import { model, Schema } from "mongoose";

enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}
const foodOrderItem = new Schema({
  food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
  quantity: { type: Number, required: true },
});

const foodOrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalPrice: { type: String, required: true },
    foodOrderItems: { type: [foodOrderItem] },
    status: {
      type: String,
      default: FoodOrderStatusEnum.PENDING,
      required: true,
      enum: Object.values(FoodOrderStatusEnum),
    },
  },
  { timestamps: true }
);
const foodOrder = model("FoodOrder", foodOrderSchema);

export default foodOrder;
