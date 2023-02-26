const db = require("../models");
const ImplementName = db.implementName;


// get ImplementName..
exports.getImplementName = (req, res) => {
  ImplementName.find()
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found" });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving ImplementType" + err });
    });
};


// add ImplementName...
exports.addImplementName = (req, res) => {
  const Implementname = new ImplementName({
    name: req.body.name,
    shortName: req.body.shortName
  });

  Implementname
    .save()
    .then(data => {
      res.send(data);
      console.log(data)
    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || "some error occurred while creating the Implementype"
      });
    });
}



// Edit/update ImplementName Id
exports.updateImplementNameById = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  ImplementName.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update ImplementName with id=${id}. Maybe driver was not found!`
        });
      } else
        res.send({
          message: "ImplementName was updated successfully.",
        });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating ImplementName with id=" + id
      });
    });
};


// delete api for ImplementName...!
exports.deleteImplementNameById = (req, res) => {
  const id = req.params.id;
  ImplementName.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete ImplementName with id=${id}. Maybe ImplementName was not found!`
        });
      } else {
        res.send({
          message: "ImplementName was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete ImplementName with id =" + id
      });
    });
};