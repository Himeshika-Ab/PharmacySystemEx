const mongoose = require("mongoose");

var paymentSchema = require("../Models/PaymentSchema");
var prescriptionSchema = require("../Models/PrescriptionSchema");
var supplierSchema = require("../Models/SupplierSchema");

mongoose.model('Payment', paymentSchema);
mongoose.model('Prescription',prescriptionSchema);
mongoose.model('Supplier', supplierSchema);

mongoose.connect('mongodb://localhost:27017/pharmacy', function(err){
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log("DB Connected");
});

module.exports = mongoose;
