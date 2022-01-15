const express = require('express');
const app= express();
const port=8000;
app.use('/',require('./route'));
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        console.log(`Error in running our server : ${err}`);
    }
    console.log(`Server is Running algorithm!!! :${port}`);
});