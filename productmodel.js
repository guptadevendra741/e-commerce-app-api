const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      category: {
        type: String,
        required: true
      }

})

const ProductModel = mongoose.model("ProductModel", ProductSchema);

module.exports=ProductModel;