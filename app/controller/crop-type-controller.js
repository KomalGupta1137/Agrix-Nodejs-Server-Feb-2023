const db = require('../models');
const CropType = db.cropType

//Get for CropType
exports.getCropType = (req, res) => {
    const cropType = req.query.CropType;
    CropType.find(cropType)
        .then(data => {
            if (!data)
                res.status(404).send({ messsage: "Not found Croptype with id ", cropType });
            else res.send(data);
        })
        .catch(error => {
            res
                .status(500)
                .send({ messsage: "Error retrieving Owner with id=", cropType })
        });
}

//Add for CropType
exports.addCropType = (req, res) => {
    const croptype = new CropType({
        name: req.body.name,
        shortName: req.body.shortName
    });

    croptype
        .save(croptype)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                messsage:
                    error.messsage || "some error occurred while creating the croptype"
            });
        });

}


exports.updateCropTypebyId = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    CropType.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Crop with id=${id}. Maybe Crop was not found!`
                });
            } else res.send({ message: "Crop was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating CropType with id=" + id
            });
        });
}

// delete CropType...
exports.deleteCropTypebyId = (req, res) => {
    const id = req.params.id;
    CropType.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete CropType with id=${id}. Maybe CropType was not found!`
                });
            } else {
                res.send({
                    message: "CropType was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Farmer with id=" + err
            });
        });
};

