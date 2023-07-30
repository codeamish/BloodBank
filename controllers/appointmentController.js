const Appointment = require("../models/appointmentsModel");
const BloodBank = require("../models/bloodBanksModel");
exports.completeAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.body._id, {
      completed: true,
    });

    const bloodGroup = appointment.bloodGroup;

    if (!appointment.donor) {
      const bloodBank = await BloodBank.findOne({ centre: appointment.centre });

      if (bloodBank.bloodUnits[0][bloodGroup] >= appointment.units) {
        bloodBank.bloodUnits[0][bloodGroup] =
          bloodBank.bloodUnits[0][bloodGroup] - appointment.units;
        bloodBank.bloodUnits[0] = { ...bloodBank.bloodUnits[0] };

        await bloodBank.save();
      } else {
        res.status(404).json({
          status: "fail",
          message: "Not enough blood units Pehle de bsdk",
        });
      }
    } else {
      const bloodBank = await BloodBank.findOne({ centre: appointment.centre });

      bloodBank.bloodUnits[0][bloodGroup] =
        bloodBank.bloodUnits[0][bloodGroup] + appointment.units;
      bloodBank.bloodUnits[0] = { ...bloodBank.bloodUnits[0] };

      await bloodBank.save();
    }

    res.status(200).json({
      status: "success",
      data: {
        appointment,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find("-__v");
    res.status(200).json({
      status: "success",
      data: {
        appointments,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.discardAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.body._id);
    res.status(200).json({
      status: "success",
      data: {
        appointment,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
