const { authJwt } = require('../middleware');

module.exports = app =>{
    const cultivation = require('../controller/cultivation.controller')
    var router = require('express').Router();

    router.post('/',[authJwt.verifyToken,authJwt.isAdmin],cultivation.addCultivation);
    router.get('/',[authJwt.verifyToken,authJwt.isAdmin],cultivation.getCultivation);
    router.get('/:plot',[authJwt.verifyToken,authJwt.isAdmin],cultivation.getCultivationByplot);

    app.use('/api/cultivation',router);
}