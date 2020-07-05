var mongoose = require("../DBConfig/dbConfig");
var PrescriptionSchema = mongoose.model('Payment');

var PrescriptionController = function(){

    this.addPrescription = function(data){
        return new Promise(function(resolve,reject){
            var prescription = new PrescriptionSchema({
                pres_No: data.pres_No,
                name: data.name,
                amount: data.amount
            });

            prescription.save().then(function(){
                resolve({status:200, message:"Prescription added!"});
            }).catch(function(error){
                reject({status:500, message: "Error: "+error});
            });
        });
    };

    this.getAll = function(){
        return new Promise (function(resolve,reject){
            PrescriptionSchema.find().exec().then(function(data){
                resolve({status:200, message: data});
            }).catch(function(err){
                reject({status:500, message: "Error: "+err});
            });
        });
    };

    this.getPrescription = function(pres_No){
        return new Promise(function(resolve,reject){
            console.log(pres_No);
            PrescriptionSchema.find({pres_No:pres_No}).exec().then(function(data){
                resolve({status:200, message:data});
            }).catch(function(err){
                reject({status:500, message:'Error - ' + err});
            });
        });
    }

    this.updatePrescription = function (id,data) {
        return new Promise(function (resolve,reject) {
            PrescriptionSchema.update({_id:id},data).then(function(){
                resolve({status:200, message:"Prescription details updated"});
            }).catch(function (err) {
                reject({status:500,message:"Error - " + err});
            });
        });
    };

    this.deletePrescription = function(id){
        return new Promise(function(resolve,reject){
            PrescriptionSchema.remove({_id:id}).then(function(){
                resolve({status:200, message: "Prescription Deleted!"});
            }).catch(function(err){
                reject({status:500, message : "Error - " + err});
            });
        });
    };
}

module.exports = new PrescriptionController();