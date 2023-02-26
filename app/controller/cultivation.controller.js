const db = require('../models')
const CultivationDate = db.cultivationDate;


//Add for cultivation
exports.addCultivation = (req, res) => {
    const cultivation = new CultivationDate({
        plotId: req.body.plotId,
        cultivationDate: req.body.cultivationDate
    });

    cultivation
        .save(cultivation)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                messsage:
                    error.messsage || "some error occurred while creating the cultivation"
            });
        });
}


// Get cultivation...
exports.getCultivation = (req, res) => {
    CultivationDate.find()
        .then(data => {
            if (!data)
                res.status(404).send({ messsage: "Not found cultivation" });
            else res.send(data);
        })
        .catch(error => {
            res
                .status(500)
                .send({ messsage: "Error retrieving cultivation", error })
        });
}


// Get cultivation by plotId...
exports.getCultivationByplot = (req, res) => {
    const plot = req.params.plot;
    CultivationDate.find({ plotId: plot })
        .then(data => {
            if (!data)
                res.status(404).send({ messsage: "Not found cultivation", plot });
            else res.send(data);
        })
        .catch(error => {
            res
                .status(500)
                .send({ messsage: "Error retrieving cultivation", error })
        });
}