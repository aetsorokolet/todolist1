const express= require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();
const date=require(__dirname+"/generateDate.js");
app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//massiiv kuhu salvestame
let toDoList=[];
app.get("/", (req, res)=>{
    //võtab failist generateDate
    let day= date.getDate();
    let weekday=date.getWeekDay();
    console.log(day);
    //global scope
    res.render("index.ejs",{date: weekday, toDoItems: toDoList});
});
app.post("/", (req, res)=>{
let newTask=req.body.newTask;
//lisame arayle
toDoList.push(newTask);
//suuname andmed tagasi pealehele, ei tee renderit
res.redirect("/");
});
app.get("/about", (req, res)=>{
    res.render("about.ejs");
});
app.listen(3000, ()=>{
    console.log("server running");
});