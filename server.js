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
  let res_obj = {};
  res_obj.job = [
    {id:1,name:"Android"},
    {id:2,name:"Scala"},
    {id:3,name:"DevOps"},
    {id:4,name:"C/C++"},
    {id:5,name:"Ruby"},
    {id:6,name:"PHP"},
    {id:7,name:"Java"},
    {id:8,name:"JS Backend"},
    {id:9,name:"JS Frontend"},
    {id:10,name:"Python"},
    {id:11,name:"iOS"},
    {id:12,name:".NET"},
    {id:13,name:"Data Scientist"},
    {id:14,name:"Product Manager"},
  ];
  res.render('pages/landing-page',res_obj);
});

app.post('/search', function(req, res) {
  let job_data = [
    {id:1,name:"Android",count:7,salaryJ:41,salaryS:58,equity:59,companies:420},
    {id:2,name:"Scala",count:4,salaryJ:39,salaryS:48,equity:0,companies:341},
    {id:3,name:"DevOps",count:3,salaryJ:41,salaryS:50,equity:29,companies:298},
    {id:4,name:"C/C++",count:2,salaryJ:39,salaryS:44,equity:33,companies:203},
    {id:5,name:"Ruby",count:6,salaryJ:41,salaryS:52,equity:22,companies:405},
    {id:6,name:"PHP",count:7,salaryJ:38,salaryS:47,equity:10,companies:456},
    {id:7,name:"Java",count:4,salaryJ:40,salaryS:45,equity:14,companies:453},
    {id:8,name:"JS Backend",count:5,salaryJ:41,salaryS:52,equity:40,companies:478},
    {id:9,name:"JS Frontend",count:8,salaryJ:42,salaryS:54,equity:28,companies:499},
    {id:10,name:"Python",count:3,salaryJ:39,salaryS:52,equity:20,companies:407},
    {id:11,name:"iOS",count:5,salaryJ:38,salaryS:52,equity:33,companies:402},
    {id:12,name:".NET",count:3,salaryJ:37,salaryS:46,equity:36,companies:398},
    {id:13,name:"Data Scientist",count:3,salaryJ:43,salaryS:56,equity:8,companies:320},
    {id:14,name:"Product Manager",count:2,salaryJ:42,salaryS:55,equity:33,companies:387},
  ];
  let count_data = [7,4,3,2,6,7,4,5,8,3,5,3,3,2];
  let salaryJ_data = [41,39,41,39,41,38,40,41,42,39,38,37,43,42];
  let salaryS_data = [58,48,50,44,52,47,45,52,54,52,52,46,56,55];
  let equity_data = [59,0,29,33,22,10,14,40,28,20,33,36,8,33];
  let companies_data = [420,341,298,203,405,456,453,478,499,407,402,398,320,387];
  let data = {
    results:{
      count: count_data[req.body.jobid - 1],
      salaryJ: salaryJ_data[req.body.jobid - 1],
      salaryS: salaryS_data[req.body.jobid - 1],
      equity: equity_data[req.body.jobid - 1],
      companies: companies_data[req.body.jobid - 1],
    }
  }
  res.json(data);
});

app.listen(8080);
console.log("Server listening at Port 8080");
