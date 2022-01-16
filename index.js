const express = require('express');
const app= express();
const port=8000;

const expressejslayout= require('express-ejs-layouts');

app.use(express.static('./assets'));

app.use(expressejslayout);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
// use express router
app.use('/',require('./route'));

// setup a view engine 
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        console.log(`Error in running  server : ${err}`);
    }
    console.log(`Server is Runningalgorithm!!! :${port}`);
});