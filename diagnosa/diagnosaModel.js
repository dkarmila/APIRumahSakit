let mongoose = require('mongoose');

let diagnosa = mongoose.Schema(
    {
        KdDiagnosa : String,
		KdPasien : String,
		KdRumahSakit : String,
		KdDokter : String,
		KetDiagnosa : String,
		KdPerawatan : String,
		TglDiagnosaAwal : Date,
		KdPerawat : String
    },
    {
        collection: 'Diagnosa'
    }
);

let Diagnosa = module.exports = mongoose.model('Diagnosa', diagnosa);