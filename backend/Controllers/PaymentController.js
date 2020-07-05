var mongoose = require("../DBConfig/dbConfig");
var PaymentSchema = mongoose.model('Payment');

var PaymentController = function(){

    this.addPayment = function(data){
        return new Promise(function(resolve,reject){
            var payment = new PaymentSchema({
                name: data.name,
                amount: data.amount,
                payment_type: data.payment_type
            });

            payment.save().then(function(){
                resolve({status:200, message:"Payment added!"});
            }).catch(function(error){
                reject({status:500, message: "Error: "+error});
            });
        });
    };

    this.getAll = function(){
        return new Promise (function(resolve,reject){
            PaymentSchema.find().exec().then(function(data){
                resolve({status:200, message: data});
            }).catch(function(err){
                reject({status:500, message: "Error: "+err});
            });
        });
    };

    this.getPayment = function(name){
        return new Promise(function(resolve,reject){
            console.log(name);
            PaymentSchema.find({name:name}).exec().then(function(data){
                resolve({status:200, message:data});
            }).catch(function(err){
                reject({status:500, message:'Error - ' + err});
            });
        });
    }

    this.updatePayment = function (id,data) {
        return new Promise(function (resolve,reject) {
            PaymentSchema.update({_id:id},data).then(function(){
                resolve({status:200, message:"Payment details updated"});
            }).catch(function (err) {
                reject({status:500,message:"Error - " + err});
            });
        });
    };

    this.deletePayment = function(id){
        return new Promise(function(resolve,reject){
            PaymentSchema.remove({_id:id}).then(function(){
                resolve({status:200, message: "Payment Deleted!"});
            }).catch(function(err){
                reject({status:500, message : "Error - " + err});
            });
        });
    };
}

module.exports = new PaymentController();