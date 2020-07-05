const express = require ("express");
const app = express();
var bodyparser = require("body-parser");
var cors = require("cors");

const Routes = require("./mainRoutes");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors());
app.use('/',Routes);

app.listen(8000, 'localhost', function(err){
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Server running on port 8000");
});