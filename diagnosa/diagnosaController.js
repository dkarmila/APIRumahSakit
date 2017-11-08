Diagnosa = require('./diagnosaModel.js');

module.exports.getDiagnosa = function(callback,limit){
    Diagnosa.find(callback).limit(limit);
}

module.exports.getDiagnosaById = function(id, callback){
    Diagnosa.findById(id, callback);
}

module.exports.addDiagnosa = function(dataDiagnosa, callback){
    Diagnosa.create(dataDiagnosa, callback);
}

module.exports.upDiagnosa = function(id, dataDiagnosa, callback){
    Diagnosa.findByIdAndUpdate(id, dataDiagnosa, callback);
}

module.exports.rmDiagnosa = function(id, callback){
    Diagnosa.findByIdAndRemove(id, callback);
}