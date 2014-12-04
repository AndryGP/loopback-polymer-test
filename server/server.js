var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();

// request pre-processing middleware
app.use(loopback.compress());

// -- Add your pre-processing middleware here --

// boot scripts mount components like REST API
boot(app, __dirname);

// -- Mount static files here--
// All static middleware should be registered at the end, as all requests
// passing the static middleware are hitting the file system
// Example:
var path = require('path');
app.use(loopback.static(path.resolve('__dirname', '../client')));
app.use(loopback.static(path.resolve('__dirname', '../common')));

// Requests that get this far won't be handled
// by any middleware. Convert them into a 404 error
// that will be handled later down the chain.
// app.use(loopback.urlNotFound());

// The ultimate error handler.
// app.use(loopback.errorHandler());

app.index_file_path = path.resolve(__dirname, '../client/index.html');
app.get('*', function (req, res) { res.sendFile(app.index_file_path); });

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
