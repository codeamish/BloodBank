const Appointment = require('../models/appointmentsModel');

exports.bookDonationAppointment = async (req, res, next) => {
    try {
        req.body.appointmentTime = new Date(req.body.appointmentTime);
        const appointment = await Appointment.create(req.body);
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
}

exports.bookWithdrawalAppointment = async (req, res, next) => {
    try {
        const appointment = await Appointment.create(req.body);
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
}