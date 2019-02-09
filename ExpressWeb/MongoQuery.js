var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("sampledb");
  var query = { address: "seoul 100" };
  // find(query) >> where address = seoul 100 (조건)
  dbo.collection("customers").find(query).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});