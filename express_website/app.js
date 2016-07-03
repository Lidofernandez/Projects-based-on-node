const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));
