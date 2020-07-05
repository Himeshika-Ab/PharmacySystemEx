const mongoose = require("mongoose");
const Schema = mongoose.mongoose.Schema;

const paymentSchema = new Schema ({
    
    amount:{
        type: Number,
        required: true
    },
    payment_type: {
        type: String,
        required: true
    }
})