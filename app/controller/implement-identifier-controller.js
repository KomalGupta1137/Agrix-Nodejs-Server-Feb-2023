const db = require("../models");
const ImplementIdentifier = db.implementIdentifer;


// get Identifier...
exports.getIdentifier = (req, res) => {
  ImplementIdentifier.find()
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Identifier" });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Identifier" + err });
    });
};



// add Identifier...
exports.addIdentifier = (req, res) => {
  const identifier = new ImplementIdentifier({
    name: req.body.name
  });

  identifier
    .save()
    .then(data => {
      res.send(data);
      console.log(data)
    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || "some error occurred while creating the Identifier"
      });
    });
}