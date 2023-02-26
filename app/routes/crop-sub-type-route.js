const { authJwt } = require('../middleware');

module.exports = app => {
    const cropsubtype = require('../controller/crop-sub-type-controller')
    var router = require('express').Router();
    router.post('/', [authJwt.verifyToken, authJwt.isAdmin], cropsubtype.addCropSubType);
    router.get('/', [authJwt.verifyToken, authJwt.isAdmin], cropsubtype.getCropSubType);

    app.use('/api/cropsubtype', router);
}