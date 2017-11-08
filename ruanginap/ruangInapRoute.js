let express = require('express');
let router = express.Router();
let ruangInapController = require('./ruangInapController.js');

router.get('/ruanginap', function(req, res){
    ruangInapController.getRuangInap(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/ruanginap/:id', function(req, res){
    ruangInapController.getRuangInapById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.post('/ruanginap', function(req, res){
    let dataRuangInap = req.body;
    ruangInapController.addRuangInap(dataRuangInap, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.put('/ruanginap/:id', function(req, res){
    let dataRuangInap = req.body;
    ruangInapController.upRuangInap(req.params.id, dataRuangInap, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.delete('/ruanginap/:id', function(req,res){
    ruangInapController.rmRuangInap(req.params.id,function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

module.exports=router;