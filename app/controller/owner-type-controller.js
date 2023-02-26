const db = require('../models')
const OwnerType = db.ownerType;

//Get for OwnerType
exports.getOwnerType = (req, res) => {
    const ownerType = req.query.OwnerType;
    OwnerType.find(ownerType)
        .then(data => {
            if (!data)
                res.status(404).send({ messsage: "Not found Owner with id ", ownerType });
            else res.send(data);
        })
        .catch(error => {
            res
                .status(500)
                .send({ messsage: "Error retrieving Owner with id=", ownerType })
        });
}

//Add for OwnerType
exports.addOwnerType = (req, res) => {
    const owner = new OwnerType({
        ownerType: req.body.ownerType
    });

    owner
        .save(owner)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                messsage:
                    error.messsage || "some error occurred while creating the state"
            });
        });
}
