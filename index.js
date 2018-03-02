const express = require('express');
var bodyParser = require('body-parser');

const { sendEmail } = require('./sendgrid');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080; 

const router = express.Router();

router.get('/', (req, res) => { 
  res.json({ message: 'hooray! welcome to our api!' });
});

router.post('/email', (req, res) => {
  sendEmail();
  res.json({ mssage: 'Email sent! '});
})

app.listen(port);

app.use('/api', router);