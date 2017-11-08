let express = require('express');
let router = express.Router();
let diagnosaDetailController = require('./diagnosaDetailController.js');

router.get('/diagnosadetail', function(req, res){
    diagnosaDetailController.getDiagnosaDetail(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/diagnosadetail/:id', function(req, res){
    diagnosaDetailController.getDiagnosaDetailById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.post('/diagnosadetail', function(req, res){
    let dataDiagnosaDetail = req.body;
    diagnosaDetailController.addDiagnosaDetail(dataDiagnosaDetail, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.put('/diagnosadetail/:id', function(req, res){
    let dataDiagnosaDetail = req.body;
    diagnosaDetailController.upDiagnosaDetail(req.params.id, dataDiagnosaDetail, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.delete('/diagnosadetail/:id', function(req,res){
    diagnosaDetailController.rmDiagnosaDetail(req.params.id,function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

module.exports=router;