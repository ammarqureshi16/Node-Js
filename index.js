// console.log("Chalna Bhai-->>>");

const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlincoded({ extends: true }));

app.use("/", require("./route"));

// app.listen(3000, function () {
//   console.log("App Chala Jani...");
// });

// app.use("ads", function (req, res) {
//   const ads = [
//     { title: "Iphone", price: 10000 },
//     { title: "Car", price: 50000 },
//   ];
//   res.send(ads);
// });
