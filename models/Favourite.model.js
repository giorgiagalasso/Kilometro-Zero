const {Schema, model} = require("mongoose");


const favouriteSchema = new Schema ({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    image: {
        type: String,
    }
});


module.exports = model("Favourite", favouriteSchema);