'use strict'

var express = require('express');
var LikeController = require('../controllers/like');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

//api.get('/pruebalike', md_auth.ensureAuth, LikeController.prueba);
api.post('/likes', md_auth.ensureAuth, LikeController.saveLike);
api.delete('/like/:id', md_auth.ensureAuth, LikeController.deleteLike);
api.get('/getLikes/:page?', md_auth.ensureAuth, LikeController.getLikeUsers);
api.get('/getcountlike/:id?', md_auth.ensureAuth, LikeController.getCounters);
//api.put('/updateLike/:id?', md_auth.ensureAuth, LikeController.updateLike);  
api.get('/userLike', md_auth.ensureAuth, LikeController.userLike);  
//api.get('/followed/:id?/:page?', md_auth.ensureAuth, FollowController.getFollowedUsers);
//api.get('/get-my-follows/:followed?', md_auth.ensureAuth, FollowController.getMyFollows);
 
module.exports = api;