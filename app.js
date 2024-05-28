const express = require('express');
const dotenv = require('dotenv');
const paymentRouter = require('./routes/paymentRoute');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

dotenv.config({path: './config.env'});

const mongoUrl = process.env.DATABASE;

mongoose.connect(mongoUrl).then((con)=>console.log('Database connected successfully'))

app.use(express.json())

app.get('/test', (req, res) => {
    res.send('Test route is working');
  });

app.use('/api/payment', paymentRouter)

const port = process.env.PORT || 5000

app.listen(port , ()=> console.log(`server listening on port ${port}`))