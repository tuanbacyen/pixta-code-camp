require('./models/db');
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/apiRoutes');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressLayouts);

app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main-layout');

var port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('Server start');
});

app.get('/', (req, res) => {
  res.send('Hello World! port 3001');
});


app.use('/', apiRoutes);
