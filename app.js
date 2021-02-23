const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

//express work
app.use('/static',express.static('static'));
app.use(express.urlencoded());


//pug work
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

//endpoint
app.get('/',(req,res)=>{
    const params = {};
    res.status(200).render('index.pug',params);
})

//server start
app.listen(port,()=>{
    console.log(`The website is started on port ${port}`);
})
 