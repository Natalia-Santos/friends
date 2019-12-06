'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShareSchema = Schema({
	publication: { type: Schema.ObjectId, ref:'Publication' }
	//user: { type: Schema.ObjectId, ref:'User' },
//	name: { type: Schema.ObjectId, ref:'User' },
//	surname: { type: Schema.ObjectId, ref:'User' },
	//image: { type: Schema.ObjectId, ref:'User' },
});

module.exports = mongoose.model('Share', ShareSchema);