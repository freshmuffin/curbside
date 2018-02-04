const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();

const database = require('./db');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../dist')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.post('/requestPickup', function (req, res) {
  const { address, date, time, phone } = req.body;

  database.connection.query(`INSERT INTO client (site_id, phone, address, latitude, longitude, date, time_window) VALUES ('123', ${phone}, ${address}, '123', '123', ${date}, ${time})`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.end();
  });
 
});

app.listen(port, _ => {
  console.log(`Server connected to port number: ${port}`);
}); 