const express = require('express');
const path = require('path');


const app = express();

// //Connect DB
// connectDB();

// init Middleware
app.use(express.json({  extended: false }));
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
  
    next();
  });

//Define Routes
app.use('/api/store', require('./routes/api/store'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/workouts', require('./routes/api/workouts'));


//Serve static asset in production
if(process.env.NODE_ENV == 'production'){
  //Set static folder
  app.use(express.static('client/build'));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));