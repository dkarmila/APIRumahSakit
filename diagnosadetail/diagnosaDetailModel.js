let mongoose = require('mongoose');

let diagnosaDetail = mongoose.Schema(
    {
        KdDiagnosa : String,
		KdRuangInap : String,
		KdDiagnosaAwal : String,
		KdDokter : String,
		TglDiagnosaDetail : Date,
		KdLab : String
    },
    {
        collection: 'DiagnosaDetail'
    }
);

let DiagnosaDetail = module.exports = mongoose.model('DiagnosaDetail', diagnosaDetail);