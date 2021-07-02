const {Schema, model} = require("mongoose");


const ProductSchema = new Schema ({
    name: String,
    category: String,
    description: String,
    rating: Number,
    price: String,
    helpfulUrl: String,
    reviews: [{ 
        username: String,
        comment: String,
    }],
    imageUrl: String, 
    },
    {
    timestamps: true,
    }
);


module.exports = model("Product", ProductSchema);






















