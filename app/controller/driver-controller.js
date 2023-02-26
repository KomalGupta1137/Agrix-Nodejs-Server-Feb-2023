const db = require("../models");
const Driver = db.driver;


// Get Driver Details
exports.allDriver = (req, res) => {
  const driverId = req.query.driverId;
  Driver.find(driverId)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Driver with id " + driverId });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Driver with id=" + driverId });
    });
}


// get Driver by page..
exports.Driver = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);

    const skip = (page - 1) * size;

    const total = await Driver.countDocuments();
    const driver = await Driver.find().sort([['createdAt', 'desc']]).skip(skip).limit(size);

    res.json({
      driver,
      total,
      page,
      size
    });
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}



// Add Driver
exports.addDriver = (req, res) => {
  const driver = new Driver({
    driverId: req.body.driverId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    contactDetails: req.body.contactDetails,
    village: req.body.village,
    district: req.body.district,
    state: req.body.state,
    clusterId: req.body.clusterId
  });

  driver
    .save(driver)
    .then(data => {
      res.send(data);
      console.log(data)
    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || "some error occurred while creating the driver"
      });
    });
}


// Get driver by Id
exports.driverById = (req, res) => {
  const id = req.params.id;
  Driver.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Driver with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Driver with id=" + id
      });
    });
};


// search api for driver by driverId or driverName
exports.searchDriver = (req, res) => {
  const firstName = { $regex: ".*" + req.query.firstName + ".*", $options: "i" }
  const driverId = { $regex: ".*" + req.query.driverId + ".*", $options: "i" }
  // console.log(driverId, "drhgiu")
  // console.log(firstName, "sshdghs")
  Driver.find({ $or: [{ firstName }, { driverId }] })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Driver with firstName or lastname" });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Driver with firstName or lastname", err });
    });
};

// Edit/update  Driver Id
exports.updateDriverById = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Driver.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update driver with id=${id}. Maybe driver was not found!`
        });
      } else res.send({
        message: "driver was updated successfully.",
        driver: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating driver with id=" + id
      });
    });
};


// delete api for Drivers...!
exports.deleteDriverById = (req, res) => {
  const id = req.params.id;
  Driver.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Driver with id=${id}. Maybe Driver was not found!`
        });
      } else {
        res.send({
          message: "Driver was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Driver with id =" + id
      });
    });
};