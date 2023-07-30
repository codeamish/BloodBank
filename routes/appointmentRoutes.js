const router = require("express").Router();
const appointmentController = require("./../controllers/appointmentController");
const authController = require("./../controllers/authController");

router.route('/check').post(authController.signup);
router.route('/check2').post(authController.login);
router
  .route("/getAllAppointments")
  .get(authController.login,appointmentController.getAllAppointments);
router
  .route("/discardAppointment")
  .delete(appointmentController.discardAppointment);
router
  .route("/completeAppointment")
  .post(appointmentController.completeAppointment);

module.exports = router;