const db = require('../models')
const FarmSeason = db.farmSeason;


//Get for farm-Season
exports.getFarmSeason = (req, res) => {
    const farmingSeason = req.query.farmingSeason;
    FarmSeason.find(farmingSeason)
        .then(data => {
            if (!data)
                res.status(404).send({ messsage: "Not found farmSeason with id ", farmingSeason });
            else res.send(data);
        })
        .catch(error => {
            res
                .status(500)
                .send({ messsage: "Error retrieving Owner with id=", farmingSeason })
        });
}


//  Add farm-Seasons

exports.addFarmSeason = (req, res) => {
    const farmSeason = new FarmSeason({
        farmingSeason: req.body.farmingSeason
    });

    farmSeason
        .save(farmSeason)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                messsage:
                    error.messsage || "some error occurred while creating the farmSeason"
            });
        });
}