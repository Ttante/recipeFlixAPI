	// packages AKA dependencies
const express    = require('express'); 		// call express
const app        = express(); 				// define our app using express
// const bodyParser = require('body-parser');


// imports
const models = require('./models/');


// app config
// app.use(bodyParser());

// route section
const router = express.Router(); 
require( './routes/user' )( router, models.User);

// Register router, to prefix all routes w/ '/api' use: app.use('/api', router);
app.use(router);

const port = process.env.PORT || 8008;
app.listen(port);
console.log('now serving on port ' + port);