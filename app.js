const express = require('express');
const path = require('path');
const app = express();
const port = 8030;
const bodyParser = require('body-parser');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/danceContact', {useNewUrlParser: true, useUnifiedTopology: true})

//mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    phone: String,
    email: String,
    address: String
  });

//mongoose model
const Contact = mongoose.model('Contact', contactSchema);  




//express work
app.use('/static',express.static('static'));
app.use(express.urlencoded());


//pug work
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

//endpoint
app.get('/',(req,res)=>{
    const params = {};
    res.status(200).render('home.pug',params);
})

app.get('/contact',(req,res)=>{
    const params = {};
    res.status(200).render('contact.pug',params);
})

app.post('/contact',(req,res)=>{
    let myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send('This item has been saved to the database');
    }).catch(()=>{
        res.status(400).send('Item was not saved to database')
    })
})

//server start
app.listen(port,()=>{
    console.log(`The website is started on port ${port}`);
})
 