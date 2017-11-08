let express = require('express');
let router = express.Router();
let diagnosaController = require('./diagnosaController.js');

router.get('/diagnosa', function(req, res){
    diagnosaController.getDiagnosa(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/diagnosa/:id', function(req, res){
    diagnosaController.getDiagnosaById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.post('/diagnosa', function(req, res){
    let dataDiagnosa = req.body;
    diagnosaController.addDiagnosa(dataDiagnosa, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.put('/diagnosa/:id', function(req, res){
    let dataDiagnosa = req.body;
    diagnosaController.upDiagnosa(req.params.id, dataDiagnosa, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.delete('/diagnosa/:id', function(req,res){
    diagnosaController.rmDiagnosa(req.params.id,function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

module.exports=router;