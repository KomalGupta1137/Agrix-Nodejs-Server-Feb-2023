const db = require("../models");
const Variety = db.variety;
const mongoose = require("mongoose")


// CreateVariety... 
exports.addVariety = (req, res) => {
    const addvariety = new Variety({
        name: req.body.name,
        shortName: req.body.shortName,
        cropId: req.body.cropId
    });

    addvariety
        .save(addvariety)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "some error occurred while creating the variety"
            });
        });
}


// All varieties..
exports.variety = (req, res) => {
    Variety.aggregate([
        {
            $lookup: {
                from: "croptypes",
                localField: "cropId",
                foreignField: "_id",
                as: "crop-variety"
            }
        }
    ])
        .then(data => {
            console.log(data, "ddddddd")
            if (!data)
                res.status(404).send({ message: "Not found variety" });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving variety" + err });
        });
}


// get api for variety according to croptype..
exports.getBycroptype = async (req, res) => {
    const cropId = req.params.cropId;
    Variety.aggregate([
        {
            $match: { cropId: mongoose.Types.ObjectId(cropId) }
        },
        {
            $lookup: {
                from: "croptypes",
                localField: "cropId",
                foreignField: "_id",
                as: "crop-variety"
            }
        },
    ])
        .then(data => {
            console.log(data, "datat")
            if (!data)
                res.status(404).send({ message: "Not found variety by = cropType" + cropId });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving variety" + err });
        });
}


// update variety...
exports.updateVarietyById = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    Variety.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Variety with id=${id}. Maybe Variety was not found!`
                });
            } else res.send({ message: "Variety was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Variety with id=" + id
            });
        });
}


// delete variety...
exports.deleteVarietyById = (req, res) => {
    const _id = req.params._id;
    Variety.findByIdAndRemove(_id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Variety with id=${_id}. Maybe Variety was not found!`
                });
            } else {
                res.send({
                    message: "Variety was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Variety with id=" + err
            });
        });
};

