'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Lost, app, auth, database) {

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
