import { Request, Response } from "express";
import Food from "../../model/food";

export const getFoodWithCategory = async (req: Request, res: Response) => {
  try {
    const getFoodsWithCategory = await Food.aggregate([
      {
        $lookup: {
          from: "foodcategories",
          localField: "category",
          foreignField: "_id",
          as: "categoryDetails",
        },
      },
      {
        $unwind: "$categoryDetails",
      },
      {
        $group: {
          _id: "$categoryDetails._id",
          categoryName: {
            $first: "$categoryDetails.categoryName",
          },
          foods: {
            $push: {
              _id: "$_id",
              foodName: "$foodName",
              price: "$price",
              image: "$image",
              ingredients: "$ingredients",
            },
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    res
      .status(200)
      .send({ success: true, getFoodsWithCategory: getFoodsWithCategory });
  } catch (error) {
    console.log("errorrr", error);
    res.status(400).send({ message: "api error", error });
  }
};
