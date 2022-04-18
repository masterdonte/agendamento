const { Router } = require("express");
const appoRoute = require("./AppointmentRoute");
const router = Router();

router.use("/", appoRoute);

module.exports = router;