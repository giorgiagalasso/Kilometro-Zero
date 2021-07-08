const {Schema, model} = require("mongoose");


const ProductSchema = new Schema(
  {
    name: String,
    category: String,
    description: String,
    rating: {
      type: Number,
      min: 0,
      max:10,
    },
    price: String,
    helpfulUrl: String,
    reviews: [
      {
        username: String,
        comment: String,
      },
    ],
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);


module.exports = model("Product", ProductSchema);






















