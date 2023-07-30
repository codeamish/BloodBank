const router = require("express").Router();
const bookingController = require("./../controllers/bookingController");

router
  .route("/bookDonationAppointment")
  .post(bookingController.bookDonationAppointment);
router
  .route("/bookWithdrawalAppointment")
  .post(bookingController.bookWithdrawalAppointment);

module.exports = router;