var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
	name: String,
	quantity: Number,
	image: String,
	decription: String
});

mongoose.model('product', productSchema)
