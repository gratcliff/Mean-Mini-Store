var mongoose = require('mongoose');
var customerSchema = new mongoose.Schema({
	name: String,
	created_at: String
});

mongoose.model('customer', customerSchema)
