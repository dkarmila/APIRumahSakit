RuangInap = require('./ruangInapModel.js');

module.exports.getRuangInap = function(callback,limit){
    RuangInap.find(callback).limit(limit);
}

module.exports.getRuangInapById = function(id, callback){
    RuangInap.findById(id, callback);
}

module.exports.addRuangInap = function(dataRuangInap, callback){
    RuangInap.create(dataRuangInap, callback);
}

module.exports.upRuangInap = function(id, dataRuangInap, callback){
    RuangInap.findByIdAndUpdate(id, dataRuangInap, callback);
}

module.exports.rmRuangInap = function(id, callback){
    RuangInap.findByIdAndRemove(id, callback);
}