
/* ======================================================================================= NodeBuildIn */

var path = require('path');

/* ======================================================================================= NodeModules */

var express      = require('express');
var morgan       = require('morgan');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose     = require('mongoose');


/* ======================================================================================= External */
const config = require('./config/config.js');

/* ======================================================================================= CreateWebServer & MiddleWare */

const app = express();

/* ======================================================================================= Routes */

/* ======================================================================================= Listen */
app.listen(config.port);
console.log('Gemstone\'s API Server Listening ... with port: 9999');
