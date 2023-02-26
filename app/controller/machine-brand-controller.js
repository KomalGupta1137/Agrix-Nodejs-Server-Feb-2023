const db = require("../models");
const Machinebrand = db.machinebrand;


// get Machinebrand..
exports.getMachinebrand = (req, res) => {
  Machinebrand.find({})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Machinebrand" });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Machinebrand" + err });
    });
};


// add Machinebrand...
exports.addMachinebrand = (req, res) => {
  const machinebrand = new Machinebrand({
    name: req.body.name
  });

  machinebrand
    .save()
    .then(data => {
      res.send(data);
      console.log(data)
    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || "some error occurred while creating the Machinebrand"
      });
    });
}