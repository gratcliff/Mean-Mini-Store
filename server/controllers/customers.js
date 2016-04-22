var mongoose = require('mongoose');
var Customer = mongoose.model('customer');
module.exports = (function (){
	return {
		index: function (req, res){
			Customer.find({}, function (err, results){
				if (err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},
		create: function (req, res){
			var customer = new Customer({name: req.body.name, created_at: req.body.created_at});
			customer.save(function (err){
				if (err){
					console.log(err);
				}
				else{
					res.json(customer);
					console.log('Created: ' + customer);
				}
			})
		},
		delete: function (req, res){
			Customer.remove({_id: req.params.id}, function (err, customer){
				if (err){
					console.log('can"t delete');
				}
				else{
					res.json('deleted');
					console.log('deleted');
				}
			})
		}
	}
})();