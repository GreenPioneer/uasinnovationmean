'use strict';

/* jshint -W098 */
var lost = require('../controllers/lost.js');

var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.article.user.id !== req.user.id) {
    return res.status(401).send('User is not authorized');
  }
  next();
};

// The Package is past automatically as first parameter  auth.isMongoId,hasAuthorization,auth.requiresLogin, 
module.exports = function(Lost, app, auth, database) {
  app.route('/lost/api/activate/')
    .get(lost.activate);
    app.route('/lost/api/create/')
    .get(lost.create);
    app.route('/lost/api/report/')
    .get(lost.report);
    app.route('/lost/api/reward/')
    .get(lost.reward);


  app.get('/lost/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/lost/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/lost/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/lost/example/render', function(req, res, next) {
    Lost.render('index', {
      package: 'lost'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
