/**
 * Created by hama on 2016/11/11.
 */

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
var Router = require('./routes/index');
var app = express();
var form = multer();

app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',Router);

app.listen(3000,function(){
    console.log('node is OK');
})