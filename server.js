//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/swell'));

app.get('/*', function(req,res) {

// CORS middleware
app.use(cors());
    
res.sendFile(path.join(__dirname+'/dist/swell/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
