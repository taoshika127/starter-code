const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router/router.js');


const app = express();
const port = 8000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});