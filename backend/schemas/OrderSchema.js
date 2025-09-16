const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    name: { type: String, required: true },
    qty: { 
        type: Number, 
        required: true, 
        min: [1, "Quantity must be at least 1"] 
    },
    price: { 
        type: Number, 
        required: true, 
        min: [0.01, "Price must be greater than 0"] // ✅ Price validation
    },
    mode: { 
        type: String, 
        enum: ["BUY", "SELL"], 
        required: true 
    }
});

module.exports = { OrderSchema };
