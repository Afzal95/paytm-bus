const express = require("express");
const router = express.Router();
const routeController = require("../controllers/route");

router.get("/v1/api/routes", routeController.getAllRoutes);
router.get(
  "/v1/api/routes/:departure/:arrival/:date",routeController.getOneRoute
);
module.exports = router;
