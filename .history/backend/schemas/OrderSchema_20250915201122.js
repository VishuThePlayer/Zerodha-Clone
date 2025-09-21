const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    name: { type: String, required: true },
    qty: { 
        type: Number, 
        required: true, 
        min: [0, "Quantity must be at least 1"] // ✅ Minimum value validation
    },
    price: { type: Number, required: true },
    mode: { 
        type: String, 
        enum: ["BUY", "SELL"], 
        required: true 
    }
});

module.exports = { OrderSchema };
