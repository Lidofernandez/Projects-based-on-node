const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/', function(req, res) {
  res.render('index', {title: 'Welcome to my world'});
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/contact', function(req, res) {
  res.render('contact');
});

app.post('/contact/send', function(req, res) {
  var transpoter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'lidofernandezburgos@gmail.com',
      pass: ''
    }
  });
  var mailOptions = {
    from: 'Lido',
    to: 'lidofernandezburgos@gmail.com',
    subject: 'kaola',
    text: 'You have a submission with the following details',
    html: '<h1>Looking good</h1>'
  };
  transpoter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Message Sent: ' + info.response);
    }
  });
});

app.listen(3000);
console.log('Server is running');