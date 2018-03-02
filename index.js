const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080; 

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));

// app.listen(3000, () => console.log('msg-api listening on port 3000!'));

app.use('/api', router);