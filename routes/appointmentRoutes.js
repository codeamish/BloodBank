const router = require("express").Router();
const appointmentController = require("./../controllers/appointmentController");

router
  .route("/getAllAppointments")
  .get(appointmentController.getAllAppointments);
router
  .route("/discardAppointment")
  .delete(appointmentController.discardAppointment);
router
  .route("/completeAppointment")
  .post(appointmentController.completeAppointment);
