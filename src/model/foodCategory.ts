import { model, Schema } from "mongoose";

const foodCategorySchema = new Schema(
  {
    categoryName: { type: String, required: true },
  },

  { timestamps: true }
);
const FoodCategory = model("FoodCategory", foodCategorySchema);

export default FoodCategory;
