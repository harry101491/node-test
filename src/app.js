import express from "express";
const app = express();
const routes = require("./routes");
const port = process.env.PORT || 3000;

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("<h2> Welcome to Node </h2>");
});

app.listen(port, () => {
  console.log("app started at port: "+port);
});

// const verticalPrinting = (input) => {
//   let sortedArray = input.split(" ").sort(); // spliting and sorting the array
//   let maxLengthArray = []; // array will contain the maximum length word in columns 
//   let outputArray = []; // output array will be printed on the console
//   let columnArray = [, , ,]; // column will contain the elements for the perticular column
//   // positioning the elements in the sorted array
//   for(let i=0;i<sortedArray.length;i++) {
//     let position = Math.min(Math.floor((i/(Math.floor(sortedArray.length/3)))), 2);
//     // counting the rows in the output array
//     if(position === 2) {
//       outputArray.push("");
//     }
//     if(columnArray[position] === undefined || columnArray[position] === null) {
//       columnArray[position] = [];
//       columnArray[position].push(sortedArray[i]);
//       maxLengthArray[position] = sortedArray[i].length;
//     }
//     else {
//       columnArray[position].push(sortedArray[i]);
//       maxLengthArray[position] = Math.max(maxLengthArray[position], sortedArray[i].length);
//     }
//   }
//   // printing on the console by using the output array
//   for(let i=0;i<maxLengthArray.length;i++) {
//     for(let j=0;j<=maxLengthArray[i];j++) {
//       for(let k=0;k<outputArray.length;k++) {
//         if(k >= columnArray[i].length || j >= columnArray[i][k].length) {
//           outputArray[k] += " ";
//         }
//         else {
//           outputArray[k] += columnArray[i][k][j];
//         }
//       }
//     }
//   }
//   return outputArray.join("\n");
// }

// console.log(verticalPrinting("cat caterpillar pie frog elephant pizza"));