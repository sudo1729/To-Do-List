//
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")
const { urlencoded } = require("body-parser");

//console.log(date());

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var items = ["Buy Food","Cook Food","Eat Food"];
workItems = [];
app.get("/",function(req,res){
    // res.send("Hello World");
    
    var day=date();
        
    res.render('list',{listTitle:day,item:items});
});

app.post("/",function(req,res){
    console.log(req.body);
    if(req.body.list ==="Work List"){
        workItems.push(req.body.newItem);
        res.redirect("/work");
    }
    else{   
        items.push(req.body.newItem);
        res.redirect("/");
    }
    

})

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",item:workItems});
});
// app.post("/work",function(req,res){
//     let workItem = req.body.newItem;
//     workItems.push(workItem);
//     res.redirect("/work");
// })




app.listen(3000,function(){
    console.log("server started at port : 3000");
});