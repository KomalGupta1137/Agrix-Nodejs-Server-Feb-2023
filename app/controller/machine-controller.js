const db = require("../models");
const Machine = db.machine;

// Add Machine
exports.addMachine = async (req, res) => {
  var implementCodeIndex = 1;
  var implementCodePrefix = req.body.implementCode;
  var incrementValue = await Machine.find({
    implementCode: implementCodePrefix + implementCodeIndex,
  });

  while (incrementValue.length > 0) {
    implementCodeIndex += 1;
    incrementValue = await Machine.find({
      implementCode: implementCodePrefix + implementCodeIndex,
    });
  }
  implementCodePrefix += implementCodeIndex;

  const machine = new Machine({
    implementCode: implementCodePrefix,
    implementNameId: req.body.implementNameId,
    implementCategoryId: req.body.implementCategoryId,
    ownershipId: req.body.ownershipId,
    horsePower: req.body.horsePower,
    wheelDrive: req.body.wheelDrive,
    machineBrand: req.body.machineBrand,
    model: req.body.model,
    cluster: req.body.cluster,
    clusterCode: req.body.clusterCode,
    implementIdentifier: req.body.implementIdentifier,
    imieNo: req.body.imieNo,
    simNo: req.body.simNo,
    simType: req.body.simType,
  });

  machine
    .save()
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "some error occurred while creating the machine",
      });
    });
};


exports.allMachine = (req, res) => {
  Machine.find()
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Machine " });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Machine" });
    });
}


// Get Machine
exports.machine = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);

    const skip = (page - 1) * size;

    const total = await Machine.countDocuments();
    const machine = await Machine.find().sort([['createdAt', 'desc']]).skip(skip).limit(size);

    res.json({
      machine,
      total,
      page,
      size,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};


// get api for machine...
exports.machineById = (req, res) => {
  const id = req.params.id;
  Machine.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Machine with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Machine with id=" + err,
      });
    });
};


// search api for machine by implementCode...
exports.searchMachine = (req, res) => {
  const implementCode = { $regex: ".*" + req.query.implementCode + ".*", $options: "i" }
  Machine.find({ implementCode })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found machine with implementCode" });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving machine with implementCode" + err });
    });
};


// Edit/update machine Id
exports.updateMachineById = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const id = req.params.id;
  Machine.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update machine with id=${id}. Maybe machine was not found!`,
        });
      } else res.send({ message: "machine was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating machine with id=" + err,
      });
    });
};

// delete api for machine...!
exports.deleteMachineById = (req, res) => {
  const id = req.params.id;
  Machine.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete machine with id=${id}. Maybe machine was not found!`,
        });
      } else {
        res.send({
          message: "machine was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete machine with id =" + err,
      });
    });
};
