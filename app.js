
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const session = require('express-session');
// const passport = require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// var findOrCreate = require('mongoose-findorcreate');

// mongoose.set('strictQuery', true);

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    console.log('inside get');
    res.render('home');
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.listen('3000', function () {
    console.log('Serer started on port 3000!');
})