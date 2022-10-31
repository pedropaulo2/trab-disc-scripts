const express = require('express');
const router = require('./routes.js');

const app = express();
const port = 4000;

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use('/', require('./routes.js'));

app.listen(port, ()=>{console.log(`Success! Your application is running on port ${port}`);});