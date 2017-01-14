'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();

module.exports = app;

var config = {
  appRoot: __dirname
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  swaggerExpress.register(app);

  var port = process.env.PORT || 8080;
  app.listen(port);
  console.log('Running on port ' + port);
});
