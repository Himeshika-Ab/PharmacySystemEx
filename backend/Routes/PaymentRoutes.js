var express = require('express');
var router = express.Router();
var controller = require('../Controllers/PaymentController');

router.post('/',function(req,res){
    controller.addPayment(req.body).then(function(data){
        res.status(data.status).send(data.message);
        console.log('success');
    }).catch(function(err){
        res.status(500).send(err.message);
    });
});

router.get('/',function(req,res){
    controller.getAll().then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).message(err.message);
    });
});

router.get('/:name',function(req,res){
    controller.getPayment(req.params.name).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    });
});

router.put('/:id',function(req,res){
    controller.updatePayment(req.params.id,req.body).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    });
});

router.delete('/:id',function(req,res){
    controller.deletePayment(req.params.id).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    });
});

module.exports = router;