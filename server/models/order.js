var mongoose = require('mongoose');
var orderSchema = new mongoose.Schema({
	name: String,
	product: String,
	quantity: Number,
	created_at: String
});

mongoose.model('order', orderSchema)