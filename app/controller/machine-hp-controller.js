const db = require("../models");
const Machinehp = db.machinehp;


// get machinehp..
exports.getMachinehp = (req, res) => {
  Machinehp.find({})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Machinehp" });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Machinehp" + err });
    });
};


// add Machinehp...
exports.addMachinehp = (req, res) => {
  const machinehp = new Machinehp({
    range: req.body.range
  });

  machinehp
    .save()
    .then(data => {
      res.send(data);
      console.log(data)
    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || "some error occurred while creating the Machinehp"
      });
    });
}