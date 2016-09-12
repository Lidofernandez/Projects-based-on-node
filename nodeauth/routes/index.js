var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var blogDb = require('monk')('localhost/nodeblog');

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res) {
  var blogDb = req.blogDb;
  var posts = blogDb.get('posts');
  posts.find({}, {}, function(error, posts) {
    res.render('index', {
      posts: posts
    });
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/users/login');
}

module.exports = router;
