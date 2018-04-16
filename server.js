// === HTTP service ===
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
const path = require('path');
var util = require('util');
var fs = require('fs');

const _table_01 = require('./public/json/table-01.json');
const _table_02 = require('./public/json/table-02.json');
const _table_03 = require('./public/json/table-03.json');

var _chart_01 = "";
var _chart_02 = "";

fs.readFile('./public/json/chart-01.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  _chart_01 = data;
});

fs.readFile('./public/json/chart-02.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  _chart_02 = data;
});

app.use(express.static(__dirname + '/public')); 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// "/json/" used only fo json response
app.get('/json/chart-table-01', function(req, res) {
    res.status(200);
   res.json(_table_01);
});
app.get('/json/chart-table-02', function(req, res) {
    res.status(200);
   res.json(_table_02);
});
app.get('/json/chart-table-03', function(req, res) {
    res.status(200);
   res.json(_table_03);
});


app.get('/json/chart-01', function(req, res) {
    res.status(200);
   res.json(_chart_01);
});
app.get('/json/chart-02', function(req, res) {
    res.status(200);
   res.json(_chart_02);
});

app.listen(3000, () => {
    console.log('App is running');
});