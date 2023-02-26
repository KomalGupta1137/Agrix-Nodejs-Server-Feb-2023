const db = require("../models");
const FarmMachine = db.farmMachine;


// add Farm machine..
exports.operationStart = (req, res) => {
  if (!req.body.phoneNumber) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }
  const farmMachine = new FarmMachine({
    machineId: req.body.machineId,
    scheduleDate: req.body.scheduleDate,
    clusterId: req.body.clusterId,
    driverId: req.body.driverId,
    attachmentId: req.body.attachmentId,
    phoneNumber: req.body.phoneNumber,
    startTime: req.body.startTime,
    stopTime: '',
  });

  farmMachine
    .save(farmMachine)
    .then(data => {
      console.log("data")
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || "some error occurred while creating the farmMachine"
      });
    });
}


// update farm-machine...
exports.operationStop = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.body._id;

  FarmMachine.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update FarmMachine with id=${id}. Maybe FarmMachine was not found!`
        });
      } else res.send({ message: "FarmMachine was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating FarmMachine with id=" + id
      });
    });

}


// Get Farm-machine..
exports.operationAll = (req, res) => {
  const phoneNumber = req.query.phoneNumber;
  var condition = phoneNumber ? { phoneNumber: { $regex: new RegExp(phoneNumber), $options: "i" } } : {};
  FarmMachine.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving FarmMachine."
      });
    });
}


//Get API for machine-history according to phone number
exports.getHistoryByPhone = (req, res) => {
  const phoneNumber = req.params.phoneNumber;
  FarmMachine.find({ phoneNumber: phoneNumber })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found any history for this contact" })
      else res.send(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving history" })
    })
}


// Get Farm-machine By page..
exports.operationByPage = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const skip = (page - 1) * size;
    const total = await FarmMachine.countDocuments();
    const farmMachine = await FarmMachine.find().sort([['createdAt', 'desc']]).skip(skip).limit(size);
    res.json({
      farmMachine,
      total,
      page,
      size,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};


exports.operationByMachineId = (req, resp) => {
  let data = FarmMachine.find(
    {
      "$or": [
        { machineId: { $regex: req.params.key } },
      ]
    }
  )
  resp.send(data);

}

//Get API for machine-history according to phone number
exports.getHistoryByPhone = (req,res) => {
  const phoneNumber = req.params.phoneNumber;
  FarmMachine.find({phoneNumber:phoneNumber})
  .then(data => {
    if(!data)
    res.status(404).send({message:"Not found any history for this contact"})
    else res.send(data)
  })
  .catch(err => {
    res
    .status(500)
    .send({message:"Error retrieving history"})
  })
}

