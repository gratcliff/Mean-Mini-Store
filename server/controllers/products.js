var mongoose = require('mongoose');
var Product = mongoose.model('product');
module.exports = (function (){
	return {
		index: function (req, res){
			Product.find({}, function (err, results){
				if (err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},
		create: function (req, res){
			var product = new Product({name: req.body.name, quantity: req.body.quantity, image: req.body.image, description: req.body.description});
			product.save(function (err){
				if (err){
					console.log(err);
				}
				else{
					res.json(product);
					console.log('Created: ' + product);
				}
			})
		}
	}
})();