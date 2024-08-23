const express = require("express");
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("App works!!");
});
app.listen(port, (err) => {
  console.log(`running server on from port::::::: http://localhost:${port}`, err);
});
