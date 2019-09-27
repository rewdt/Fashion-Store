require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const auth = require('./routes/api/auth')
const productDetails = require('./routes/api/productDetails')

const app = express()
mongoose.connect(process.env.mongouri, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected')
});

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/auth', auth)

app.use('/api', productDetails)

app.use((req, res, next) => {
    res.send('home')
})

app.listen(3000);