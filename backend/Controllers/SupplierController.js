var mongoose = require("../DBConfig/dbConfig");
var SupplierSchema = mongoose.model('Payment');

var SupplierController = function(){

    this.addSupplier = function(data){
        return new Promise(function(resolve,reject){
            var supplier = new SupplierSchema({
                name: data.name,
                company: data.company,
                tel_no: data.tel_no
            });

            supplier.save().then(function(){
                resolve({status:200, message:"Supplier added!"});
            }).catch(function(error){
                reject({status:500, message: "Error: "+error});
            });
        });
    };

    this.getAll = function(){
        return new Promise (function(resolve,reject){
            SupplierSchema.find().exec().then(function(data){
                resolve({status:200, message: data});
            }).catch(function(err){
                reject({status:500, message: "Error: "+err});
            });
        });
    };

    this.getSupplier = function(name){
        return new Promise(function(resolve,reject){
            console.log(name);
            SupplierSchema.find({name:name}).exec().then(function(data){
                resolve({status:200, message:data});
            }).catch(function(err){
                reject({status:500, message:'Error - ' + err});
            });
        });
    }

    this.updateSupplier = function (id,data) {
        return new Promise(function (resolve,reject) {
            SupplierSchema.update({_id:id},data).then(function(){
                resolve({status:200, message:"Supplier details updated"});
            }).catch(function (err) {
                reject({status:500,message:"Error - " + err});
            });
        });
    };

    this.deleteSupplier = function(id){
        return new Promise(function(resolve,reject){
            SupplierSchema.remove({_id:id}).then(function(){
                resolve({status:200, message: "Supplier Deleted!"});
            }).catch(function(err){
                reject({status:500, message : "Error - " + err});
            });
        });
    };
}

module.exports = new SupplierController();