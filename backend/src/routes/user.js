const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/v1/api/users", userController.addNewuser);

module.exports = router;
