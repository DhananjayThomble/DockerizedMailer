const express = require("express");
const router = express.Router();

// require the controllers
const {
  test,
  acceptForm,
  renderContactForm,
} = require("../controllers/formControllers");

// test route
router.get("/test", test);

router.post("/", acceptForm);

router.get("/", renderContactForm);

module.exports = router;
