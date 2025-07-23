import { model, Schema } from "mongoose";

enum userRoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
}
const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(userRoleEnum),
      required: true,
      default: userRoleEnum.USER,
    },
    // orderedFoods: [
    //   { type: Schema.Types.ObjectId, ref: "Food", required: true },
    // ],
    // ttl: { type: Date },
    isVerified: { type: Boolean, default: false },
  },

  { timestamps: true }
);
const User = model("User", userSchema);

export default User;
