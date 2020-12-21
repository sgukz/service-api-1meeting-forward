const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const moment = require("moment");
const request = require("request");
moment.locale("th");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
const APP_URL = "http://61.19.127.228:8089";

function formateDateTH(dateTime, style) {
  let date = dateTime.split("-");
  let day = parseInt(date[2]);
  let month = parseInt(date[1]);
  let strMonthCut = [
    "",
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  let year = parseInt(date[0]) + 543;

  let createdDate =
    style === 1
      ? strMonthCut[month] + " " + year
      : day + " " + strMonthCut[month] + " " + year;
  //console.log(createdDate);
  return createdDate;
}
// router test request
app.post("/body", function (req, res) {
  let userId = "";
  if (req.body.events[0].source.groupId != undefined) {
    userId = req.body.events[0].source.groupId;
  } else {
    userId = req.body.events[0].source.userId;
  }
  let formatMessage = {
    type: "text",
    text: JSON.stringify(req.body),
  };
  reply(userId, formatMessage);
  res.sendStatus(200);
});
app.post("/webhook", function (req, res) {
  let userId = "";
  if (req.body.events[0].source.groupId != undefined) {
    userId = req.body.events[0].source.groupId;
  } else {
    userId = req.body.events[0].source.userId;
  }
  let formatMessage = {
    type: "text",
    text: JSON.stringify(req.body),
  };
  reply(userId, formatMessage);
  res.sendStatus(200);
});

app.listen(process.env.PORT || 8000, function () {
  console.log("Server up and listening");
});
