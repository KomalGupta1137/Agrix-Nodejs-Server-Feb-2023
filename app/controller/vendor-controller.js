const db = require("../models");
const Vendor = db.vendor;


// get Vendor..
exports.getVendor = (req, res) => {
  Vendor.find({})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Vendor" });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Vendor" + err });
    });
};


// add Vendor...
exports.addVendor = (req, res) => {
  const vendor = new Vendor({
    name: req.body.name,
    address: req.body.address,
    vendorIdentifier: req.body.vendorIdentifier,
  });

  vendor
    .save()
    .then(data => {
      res.send(data);
      console.log(data)
    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || "some error occurred while creating the vendor"
      });
    });
}



//   const id = req.params.id;
//   Vendor.findById(id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Driver with id " + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Driver with id=" + id
//       });
//     });
// };