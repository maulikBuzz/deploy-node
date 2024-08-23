const express = require("express");
require('dotenv').config()
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '')));

// Redirect the root URL to the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port, (err) => {
  console.log(`running server on from port::::::: http://localhost:${port}`, err);
});
