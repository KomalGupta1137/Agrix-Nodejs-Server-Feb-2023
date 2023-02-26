const db = require('../models')
const CropSubType = db.cropSubType

//Get for CropSubType
exports.getCropSubType = (req, res) => {
    const cropSubType = req.query.CropSubType;
    CropSubType.find(cropSubType)
        .then(data => {
            if (!data)
                res.status(404).send({ messsage: "Not found CropSubType with id ", cropSubType });
            else res.send(data);
        })
        .catch(error => {
            res
                .status(500)
                .send({ messsage: "Error retrieving CropSubType with id=", cropSubType })
        });
}

//Add for OwnerType
exports.addCropSubType = (req, res) => {
    const cropSubType = new CropSubType({
        cropSubType: req.body.cropSubType
    });

    cropSubType
        .save(cropSubType)
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