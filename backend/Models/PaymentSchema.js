const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema ({

    name: {
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    payment_type: {
        type: String,
        required: true
    }
});

module.exports = PaymentSchema;