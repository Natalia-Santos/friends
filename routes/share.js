'use strict'

var express = require('express');
var ShareController = require('../controllers/share');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/probando-share', md_auth.ensureAuth, ShareController.probando);
api.post('/saveShare', md_auth.ensureAuth, ShareController.saveShare);
api.get('/getShares', md_auth.ensureAuth, ShareController.getShares);
//api.get('/Shares-user/:user/:page?', md_auth.ensureAuth, ShareController.getSharesUser);
//api.get('/Share/:id', md_auth.ensureAuth, ShareController.getShare);
//api.delete('/Share/:id', md_auth.ensureAuth, ShareController.deleteShare);
//api.post('/upload-image-pub/:id', [md_auth.ensureAuth, md_upload], ShareController.uploadImage);
//api.get('/get-image-pub/:imageFile', ShareController.getImageFile);


module.exports = api; 