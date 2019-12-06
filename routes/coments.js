'use strict'

var express = require('express');
var ComentsController = require('../controllers/coments');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');



api.get('/probando-com', md_auth.ensureAuth, ComentsController.probando);
api.post('/saveComent', md_auth.ensureAuth, ComentsController.saveComents);
api.get('/getComents', md_auth.ensureAuth, ComentsController.getComents);
api.delete('/deleteComent/:id', md_auth.ensureAuth, ComentsController.deleteComent);
//api.get('/Coments/:page?', md_auth.ensureAuth, ComentsController.getComentss);
//api.get('/Comentss-user/:user/:page?', md_auth.ensureAuth, ComentsController.getComentssUser);
//api.get('/Coments/:id', md_auth.ensureAuth, ComentsController.getComents);
//api.delete('/Coments/:id', md_auth.ensureAuth, ComentsController.deleteComents);
//api.post('/upload-image-pub/:id', [md_auth.ensureAuth, md_upload], ComentsController.uploadImage);
//api.get('/get-image-pub/:imageFile', ComentsController.getImageFile);


module.exports = api; 