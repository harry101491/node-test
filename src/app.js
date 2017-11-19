import express from "express";
import fs from "fs";
import moment from "moment-timezone";
import _ from "lodash";
require("./httpsTest");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h2> Welcome to Node </h2>");
});

app.listen(port, () => {
  console.log("app started at port: "+port);
});

// import { fetchAlbums } from "./httpsTest";

// http://rallycoding.herokuapp.com/api/music_albums

// fetchAlbums().then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log("error while fetching");
// });
// try {
//   const jsonObj = fetchAlbums();
//   console.log(`the value of json object is: ${JSON.stringify(jsonObj)}`);
// } catch(err) {
//   throw err;
// }



// import firebase from "firebase";
// import {FIREBASE_CONFIG} from "./config";

// firebase.initializeApp(FIREBASE_CONFIG);
// let database = firebase.database();

// database.ref("/users/profiles").once("value").then((profilesSnap) => {
//   console.log(`the values of all profiles are: ${JSON.stringify(profilesSnap.val())}`);
// }, (err) => {
//   console.log("error while accessing the profiles from the database");
//   throw err;
// });

// if(_.isUndefined(address)) {
//   console.log('address is undefined');

// } else if(_.isString(address)) {
//   console.log('address is defined');
// }

// if(_.isEmpty(allValues)) {
//   console.log('object is empty');
// }
// else {
//   console.log('object has values');
// }

// let allValues = {};
// let users = [
//   {
//     user: "Harshit",
//     age: 26 
//   },
//   {
//     user: "Bhagwat",
//     age: 28
//   },
//   {
//     user: "Svarmit",
//     age: 30
//   }
// ];

// let sortedArray = _.sortBy(users, ['age','user']);

// console.log(`the newArray formed is: ${JSON.stringify(sortedArray)}`);


// const array = ['harshit', 'pareek', 'bhagwat', 'bisht'];

// const newArray = array.filter((str) => {
//   if(str.length < 7) {
//     return str;
//   }
// });

// console.log(`the newArray formed is: ${JSON.stringify(newArray)}`);

// if(Object.prototype.toString.call(obj) === "[object Object]") {
//   console.log("It object");
//   console.log("the array of keys: "+ _.keys(obj));
// }
// else {
//   console.log("It is not Object");
// }

// testing the timezone moment API
// const startTime = moment().format('x');
// const endTime = moment().add(1,'hour').format('x');
// const shift = {
//   end : Number(endTime),
//   start : Number(startTime)
// };
// let value = 0;
// let obj = {
//   busser : { 
//     dresscode : "black shirt"
//   }, 
//   linecook : {
//     dresscode : "white shirt"
//   }  
// }
// let obj = ['busser', 'prepcook', 'linecook'];
// if(value == 1) {
//   obj = ['busser', 'prepcook', 'linecook'];
// }
// else {
  
// }

// console.log("the value of shift is: "+ JSON.stringify(shift));
// _.map(obj, (value, key) => {
  
// });
// let array = ["Harshit", "Pareek", "Bhagwat", "Bisht"];
// let obj = {
//   firstName: "Harshit",
//   lastName: "Pareek",
//   address: "830 Pavonia Ave, Jersey City, NJ",
//   zipCode: 7306
// }

// _.map(obj, (value, key) => {
//   console.log("value is: "+ value);
//   console.log("key is: "+ key);
// });

// console.log("the keys are: "+ _.keys(obj));

// let args = [0, 1, 2];
// const fun = (x, y, z) => {
//   console.log(` the value of ${x}, ${y} and ${z}`);
// }
// fun(...args);