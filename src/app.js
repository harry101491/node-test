import express from "express";
import fs from "fs";
import moment from "moment-timezone";
import _ from "lodash";
import sendgrid from "sendgrid";

const app = express();

const port = process.env.PORT || 3000;

const arr = [1,2,3,4,5];
console.log(arr.map(value => value * 2));

app.get("/", (req, res) => {
  res.send("<h2> Welcome to Node </h2>");
});

app.listen(port, () => {
  console.log("app started at port: "+port);
});