const { authJwt } = require('../middleware');
module.exports = app => {
    const farmSeason = require('../controller/farm-season-controller');
    var router = require('express').Router();

    router.get('/', [authJwt.verifyToken, authJwt.isAdmin], farmSeason.getFarmSeason);
    router.post('/', [authJwt.verifyToken, authJwt.isAdmin], farmSeason.addFarmSeason);

    app.use('/api/farmseason', router);
};