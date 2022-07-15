const router = require("express").Router();
const controller = require("../controllers/controllers");

router.get("/", controller.renderIndex);

module.exports = router;
