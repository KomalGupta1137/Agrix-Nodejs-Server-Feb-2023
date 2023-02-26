const db = require("../models");
const Cluster = db.cluster;


exports.cluster = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);

    const skip = (page - 1) * size;

    const total = await Cluster.countDocuments();
    const cluster = await Cluster.find().sort([['createdAt', 'desc']]).skip(skip).limit(size);

    res.json({
      cluster,
      total,
      page,
      size
    });
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}


// Get Cluster
exports.allCluster = (req, res) => {
  const clusterCode = req.query.clusterCode;
  var condition = clusterCode ? { clusterCode: { $regex: new RegExp(clusterCode), $options: "i" } } : {};
  Cluster.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cluster Code."
      });
    });
}


// Add Cluster
exports.addCluster = (req, res) => {
  const cluster = new Cluster({
    clusterName: req.body.clusterName,
    clusterCode: req.body.clusterCode,
    clusterManager: req.body.clusterManager,
    village: req.body.village,
    district: req.body.district,
    state: req.body.state,
    officeAddress: req.body.officeAddress,
    contactDetail: req.body.contactDetail,
    customerState: req.body.customerState,
    sales: req.body.sales,
    purchase: req.body.purchase,
    expenditure: req.body.expenditure,
    hrBasicDetails: req.body.hrBasicDetails,
    leadDetails: req.body.leadDetails,
    latitude: req.body.latitude,
    longitude: req.body.longitude

  });
  console.log(cluster);
  cluster
    .save(cluster)
    .then(data => {
      console.log(data);
      res.send(data);

    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || "some error occurred while creating the cluster"
      });
    });

}


exports.clusterById = (req, res) => {
  const id = req.params.id;
  Cluster.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Cluster with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Cluster with id=" + id });
    });
};


// search api for cluster by ClusterCode or clusterName...
exports.searchCluster = (req, res) => {
  const clusterCode = { $regex: ".*" + req.query.clusterCode + ".*", $options: "i" }
  const clusterName = { $regex: ".*" + req.query.clusterName + ".*", $options: "i" }
  Cluster.find({ $or: [{ clusterCode }, { clusterName }] })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Cluster with clusterCode or clusterName" });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Cluster with clusterCode or clusterName" + err });
    });
};



exports.updateClusterById = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Cluster.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Cluster with id=${id}. Maybe Cluster was not found!`
        });
      } else res.send({ message: "Cluster was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Cluster with id=" + id
      });
    });
}

exports.deleteClusterById = (req, res) => {
  const id = req.params.id;
  Cluster.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Cluster with id=${id}. Maybe Cluster was not found!`
        });
      } else {
        res.send({
          message: "Farmer was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Farmer with id=" + id
      });
    });
};