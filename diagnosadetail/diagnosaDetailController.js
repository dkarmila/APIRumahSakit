DiagnosaDetail = require('./diagnosaDetailModel.js');

module.exports.getDiagnosaDetail = function(callback,limit){
    DiagnosaDetail.find(callback).limit(limit);
}

module.exports.getDiagnosaDetailById = function(id, callback){
    DiagnosaDetail.findById(id, callback);
}

module.exports.addDiagnosaDetail = function(dataDiagnosaDetail, callback){
    DiagnosaDetail.create(dataDiagnosaDetail, callback);
}

module.exports.upDiagnosaDetail = function(id, dataDiagnosaDetail, callback){
    DiagnosaDetail.findByIdAndUpdate(id, dataDiagnosaDetail, callback);
}

module.exports.rmDiagnosaDetail = function(id, callback){
    DiagnosaDetail.findByIdAndRemove(id, callback);
}