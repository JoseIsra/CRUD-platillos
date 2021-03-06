const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();


require('./database/dbconfig');
//Ejs template
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//mighty morgan
app.use(morgan('dev'));

//forms
app.use(express.urlencoded({extended:false}));




//Routes

app.use('/login', require('./routes/login'));
app.use('/tarjeta', require('./routes/tarjeta'));
app.use('/platos', require('./routes/platos'));

//Static files
app.use(express.static(path.join(__dirname,'/public')));


app.listen(3000, console.log("HELLO HELLO"));   