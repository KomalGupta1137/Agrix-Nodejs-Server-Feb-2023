const db = require("../models");
const ClusterId = db.clusterId;


// Add for clusterId...!
exports.addCluster = (req, res) => {
    const cluster = new ClusterId({
        clusterId: req.body.clusterId
    });

    cluster
        .save()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            console.log(error)
            res.status(500).send({
                message:
                    error.message || "some error occurred while creating the farmer"
            });
        });
}


exports.getClusterId = (req, res) => {
    ClusterId.find({})
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Farmer with id " });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Farmer with id=" });
        });
};


exports.getByClusterId = (req, res) => {
    ClusterId.find({ clusterId: req.params.clusterId })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Farmer with id " + clusterid });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Farmer with id=" + clusterid });
        });
};

