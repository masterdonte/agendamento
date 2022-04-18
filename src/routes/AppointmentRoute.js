const { Router } = require("express");
const controller = require("../controller/AppointmentController");
const router = Router();

router.get("/", controller.index);
router.get("/list", controller.list);
router.get("/register", controller.register);
router.get("/calendar", controller.calendar);
router.get("/event/:id", controller.event);
router.post("/save", controller.save);
router.post("/finish", controller.finish);

module.exports = router;