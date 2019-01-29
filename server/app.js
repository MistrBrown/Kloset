const express = require('express');
const app = express();
const port = 6050;
const bodyParser = require('body-parser')
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build/')));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/yoloswag', (req, res) => {
  res.send('HELLO WORKD');
});

app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));