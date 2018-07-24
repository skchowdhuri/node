const express=require('express');

var app=express();
// app atar jato gulo route ace 3000 port k sunche
app.get('/', (req,res)=>{
    res.send('<h2> Here is mhjg </h2>');
});

app.listen(3000);