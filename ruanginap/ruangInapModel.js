let mongoose = require('mongoose');

let ruangInap = mongoose.Schema(
    {
        KdRuangInap : String,
		NamaRuangInap : String,
		JnsRuangInap : String,
		HargaRuangInap : Number
    },
    {
        collection: 'RuangInap'
    }
);

let RuangInap = module.exports = mongoose.model('RuangInap', ruangInap);