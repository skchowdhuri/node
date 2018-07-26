const express=require('express');
const hbs=require('hbs');
const port=process.env.PORT || 3000;

var app=express();
app.set('View Engine','hbs');
hbs.registerHelper('name','sagor');
hbs.registerPartials(__dirname + '/views/partials');


app.use((req, res, next)=>{
    console.log('sagor');
    next();
});

app.use(express.static(__dirname+'/public'));
// app atar jato gulo route ace 3000 port k sunche
app.get('/', (req,res)=>{
    //res.send('<h2> Here is mhjg </h2>');
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        message: 'This is paragraph msg',
        currentYear: new Date().getFullYear()
    });
});
app.get('/about', (req, res)=>{
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.listen(port, ()=>{
    console.log(`App is running at port ${port}`)
});