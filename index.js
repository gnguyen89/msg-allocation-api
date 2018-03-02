const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080; 

const router = express.Router();

router.get('/', (req, res) => { 
  res.json({ message: 'hooray! welcome to our api!' });
});

app.listen(8080, () => console.log('msg-api listening on port 8080!'));

app.use('/api', router);