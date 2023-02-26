const db = require("../models");
const Category = db.category;


// get Category..
exports.getCategory = (req, res) => {
  Category.find()
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Category" });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Category" + err });
    });
};


// add Category...
exports.addCategory = (req, res) => {
  const Implementcategory = new Category({
    name: req.body.name,
    shortName: req.body.shortName,
  });

  Implementcategory
    .save()
    .then(data => {
      res.send(data);
      console.log(data)
    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || "some error occurred while creating the Category"
      });
    });
}