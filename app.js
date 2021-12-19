var express    = require('express'),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose');
    app        = express();

var indexRoutes = require("./routes/route");

// mongoose.connect("mongodb://localhost/todo-api");
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));

app.use("/api/todos",indexRoutes);

app.get("/" , function(req,res){
  res.sendFile("inedx.html")
})

app.listen(3000 , function(){
  console.log("Running on port 3000");
})
