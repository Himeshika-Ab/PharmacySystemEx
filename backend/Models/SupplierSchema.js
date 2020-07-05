const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema ({

    name: {
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    tel_no: {
        type: Number,
        required: true
    }
});

module.exports = paymentSchema;