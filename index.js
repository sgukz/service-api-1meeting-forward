const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
const APP_URL = "http://61.19.127.228:5050";

app.post("/getMeetingByDocno", function (req, res) {
  const docno = req.body.docno
  res.status(200).json(docno);
});

app.listen(process.env.PORT || 8000, function () {
  console.log("Server up and listening");
});
