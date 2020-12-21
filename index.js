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

app.get("/getMeetingByDocno/:docno", function (req, res) {
  const docno = req.params.docno;
  axios
    .get(`${APP_URL}/getMeetingByDocno/${docno}`)
    .then((resp) => {
      res.status(200).json(resp.data);
    })
    .catch((error) => console.log("Error :", error));
});

app.get("/checkUser/:userId", function (req, res) {
  const userId = req.params.userId;
  axios
    .get(`${APP_URL}/checkUser/${userId}`)
    .then((resp) => {
      res.status(200).json(resp.data);
    })
    .catch((error) => console.log("Error :", error));
});

app.get("/getMeetingRegisByUserID/:docno/:userId", function (req, res) {
  const docno = req.params.docno;
  const userId = req.params.userId;
  axios
    .get(`${APP_URL}/getMeetingRegisByUserID/${docno}/${userId}`)
    .then((resp) => {
      res.status(200).json(resp.data);
    })
    .catch((error) => console.log("Error :", error));
});

app.post("/saveCheckin", function (req, res) {
  const userId = req.body.userId;
  const docno = req.body.docno;
  const is_check = req.body.is_check;
  axios
    .post(`${APP_URL}/saveCheckin`,{
        userId: userId,
        docno: docno,
        is_check: is_check
    })
    .then((resp) => {
      res.status(200).json(resp.data);
    })
    .catch((error) => console.log("Error :", error));
});

app.get("/checkUser/:userId", function (req, res) {
    const userId = req.params.userId;
    axios
      .get(`${APP_URL}/checkUser/${userId}`)
      .then((resp) => {
        res.status(200).json(resp.data);
      })
      .catch((error) => console.log("Error :", error));
  });

app.post("/saveRegister", function (req, res) {
    const form = req.body;
    axios
      .post(`${APP_URL}/saveRegister`,{
        form
      })
      .then((resp) => {
        res.status(200).json(resp.data);
      })
      .catch((error) => console.log("Error :", error));
  });

app.listen(process.env.PORT || 8000, function () {
  console.log("Server up and listening");
});
