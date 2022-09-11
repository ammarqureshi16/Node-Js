const express = require("express");
const router = require("./ads");
const route = express.Router();

router.user("/ads", require("./ads"));
// router.user('/user',require('./user'))
module.exports = route;
