const express  = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

//initiate db connection
require('./config/db');


// Handlebars Middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));


//ROUTES
const index = require('./routes/index');

//Enable CORS
app.use(cors());

app.use('/', index);

app.listen(port, console.log(`Server started on port ${port}`));