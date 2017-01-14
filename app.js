'use strict';

var SwaggerExpress = require('swagger-express-mw');
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var app = require('express')();

module.exports = app;

var config = {
  appRoot: __dirname
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  app.use(SwaggerUi(swaggerExpress.runner.swagger));

  swaggerExpress.register(app);

  var port = process.env.PORT || 8080;
  app.listen(port);
  console.log('Running on port ' + port);
});
