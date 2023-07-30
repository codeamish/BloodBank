const BloodBank = require("./../models/bloodBanksModel");

exports.addBloodBank = async (req, res, next) => {
  try {
    const bloodBank = await BloodBank.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        bloodBank,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.editBloodBank = async (req, res, next) => {
  try {
    const bloodBank = await BloodBank.findByIdAndUpdate(req.body._id, req.body);
    res.status(200).json({
      status: "success",
      data: {
        bloodBank,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteBloodBank = async (req, res, next) => {
    try{
        const bloodBank = await BloodBank.findByIdAndDelete(req.body._id);
        res.status(200).json({
            status: "success",
            data: {
                bloodBank, 
            }
        })
    }
    catch(err){
        res.status(404).json({
            status: "fail",
            message: err,
          });
    }
}

exports.getAllBloodBanks = async (req, res, next) => {
    try{
        const bloodBanks = await BloodBank.find("-__v");
        res.status(200).json({
            status: "success",
            data: {
                bloodBanks, 
            }
        })
    }
    catch(err){
        res.status(404).json({
            status: "fail",
            message: err,
          });
    }
}