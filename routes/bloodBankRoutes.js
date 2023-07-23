const router = require("express").Router();
const bloodBankController = require("./../controllers/bloodBankController");

router.route("/addBloodBank").post(bloodBankController.addBloodBank);
router.route("/editBloodBank").patch(bloodBankController.editBloodBank);
router.route("/deleteBloodBank").delete(bloodBankController.deleteBloodBank);
