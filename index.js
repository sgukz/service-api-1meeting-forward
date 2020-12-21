const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const APP_URL = "http://61.19.127.228:5050";
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.post("/getMeetingByDocno", function (req, res) {
  let docno = req.body.docno;
  return res.json({docno});
// console.log(docno);
//   let resp = {};
//   axios
//     .get(`${APP_URL}/getMeetingByDocno/${docno}`)
//     .then((resp) => {
//         // console.log();
//       return res.json(resp.data);
//     })
//     .catch((error) => console.log("Error :", error));
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server up and listening " + 3000);
});
