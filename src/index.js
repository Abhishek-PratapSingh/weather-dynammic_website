const express = require('express');
const app = express();
const path=require('path');
const hbs=require('hbs');
const port=process.env.PORT || 3000;

const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");
app.set("views",templatePath);

app.set("view engine", "hbs");
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/home",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.send("OOPs!! : error 404");
});
app.listen(port,()=>{
    console.log(`listening to ${port}`)
})