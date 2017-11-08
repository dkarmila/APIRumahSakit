let mongoose = require('mongoose');

let database = {
  user : 'dkarmila',
  pass : 'dbrumahsakit',
  url : 'ds121495.mlab.com:21495',
  name : 'dbrumahsakit'
}
  mongoose.connect('mongodb://'+ database.user +':'+ database.pass +'@'+ database.url +'/'+ database.name);
//mongoose.connect("mongodb://localhost:27017/DBRumahSakit");
var db=mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function () {
  console.log("Connection to dbrumahsakit is open...");
});