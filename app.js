const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8080;

//express work
app.use(express.static('static',options));
app.use(express.urlencoded());


//pug work
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));