const express = require("express");
const router = express.require();

router.get("/", (req, res) => {
  console.log("Req ---- >>", req.quary);
  res.send({ message: "Success" });
});

router.post("/insert", (req, res) => {
  console.log("Req ----->>", req.body);
  res.send({ message: "successfully added" });
});

router.put("/update", (req, res) => {
  res.send({ message: "successfully updated" });
});

router.delete("/delete", (req, res) => {
  res.send({ message: "successfully updated" });
});

module.exports = router;
