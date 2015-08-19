var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('public'));

app.get('/form.html', function (req, res) {
   res.sendFile( __dirname + "/" + "html.html" );
})

app.get('/get', function (req, res) {

   // Prepare output in JSON format
   response = {
       first_name:req.query.name,
       last_name:req.query.email
   };
   console.log(response);
   res.end(JSON.stringify(response));
   
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Form app listening at http://%s:%s", host, port)

})