const express = require("express");
const router = express.Router();

// require the controllers
const { test } = require("../controllers/formControllers");

// test route
router.get("/test", test);

module.exports = router;
