var express = require('express');
var bodyParser = require('body-parser');
var hygeinrunRoutes = require('./routes/hygeinrunRoutes');
var puzzleRoutes = require('./routes/puzzleRoutes');
var stairRoutes = require('./routes/stairGameRoutes');
var studentPageRoute = require('./routes/studentPageRoutes')
var app = express();

const PORT = 4080;
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api/hygeinrun', hygeinrunRoutes)
app.use('/api/puzzleGame', puzzleRoutes);
app.use('/api/stairGame', stairRoutes);
app.use('/api/student', studentPageRoute);
app.listen(PORT, function() {
    console.log("App runnning at port: " + PORT);
})