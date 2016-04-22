var mongoose = require('mongoose');
var Order = mongoose.model('order');
var Product = mongoose.model('product');
module.exports = (function (){
	return {
		index: function (req, res){
			Order.find({}, function (err, results){
				if (err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},
		create: function (req, res){
			var order = new Order({name: req.body.name, product: req.body.product, quantity: req.body.quantity, created_at: req.body.created_at});
			console.log(order);
			order.save(function (err){
				if (err){
					console.log(err);
				}
				else{
					Product.findOne({name: order.product}, function (err, product){
						// console.log(product);
						Product.update({_id: product._id}, {quantity: (product.quantity - order.quantity)}, function (err, result){
							if(product.quantity == 0){
								console.log('errors')
							}
							if (err){
								console.log(err);
							}
							else{
								res.json(order);
							}
						})
					})
				}
			})		
		}
	}
})();