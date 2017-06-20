var express = require('express'); //package for make node as web server
var app = express(); //instance for express package
var ejs = require('ejs'); //package for view engine
var bodyParser = require('body-parser');

app.set('view engine', 'ejs'); // set the view engine to ejs
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

// page render
app.get('/', function(req, res) {
  var res_obj = {};
  res_obj.job = [
    {name:"Android"},
    {name:"Scala"},
    {name:"DevOps"},
    {name:"C/C++"},
    {name:"Ruby"},
    {name:"PHP"},
    {name:"Java"},
    {name:"JS Backend"},
    {name:"JS Frontend"},
    {name:"Python"},
    {name:"iOS"},
    {name:".NET"},
    {name:"Data Scientist"},
    {name:"Product Manager"},
  ];
  res.render('pages/landing-page',res_obj);
});

app.listen(8080);
console.log("Server listening at Port 8080");
