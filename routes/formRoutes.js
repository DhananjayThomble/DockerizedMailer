const express = require("express");
const router = express.Router();

// require the controllers
const { test, acceptForm } = require("../controllers/formControllers");

// test route
router.get("/test", test);

router.post("/", acceptForm);

module.exports = router;
