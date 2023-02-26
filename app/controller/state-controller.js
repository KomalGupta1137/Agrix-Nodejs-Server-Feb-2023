const db = require("../models");
const State = db.state;


// Add state
exports.addState = (req, res) => {
    const state = new State({
        name: req.body.name,
        shortName: req.body.shortName
    });

    state
        .save(state)
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

// All state
exports.getState = (req, res) => {
    // const state = req.query.state;
    State.find({})
        .then(data => {
            if (!data)
                res.status(404).send({ messsage: "Not found State with id " });
            else res.send(data);
        })
        .catch(error => {
            res
                .status(500)
                .send({ message: "Error retrieving State with id=" + state })
        });
}



//Get Api for State According to ObjectId

exports.getStateById = (req, res) => {
    State.findOne({ _id: req.params._id })
        .then(data => {
            if (!data)
                res.status.send({ message: "StateName is not Availavle with this Object Id" })
            else
                res.send(data)
        })
        .catch(error => {
            res.status(500)
                .send({ message: "Error retrieving State with id" })
        });
}