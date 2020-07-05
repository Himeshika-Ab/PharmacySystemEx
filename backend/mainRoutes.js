const express = require('express');
var Routes = express.Router();

var paymentRoutes = require('./Routes/PaymentRoutes');
var prescriptionRoutes = require("./Routes/PrescriptionRoutes");
var supplierRoutes = require("./Routes/SupplierRoutes");

Routes.use('/payment/', paymentRoutes);
Routes.use('/prescription/',prescriptionRoutes);
Routes.use('/supplier/',supplierRoutes);

module.exports = Routes;