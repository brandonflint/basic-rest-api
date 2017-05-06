const express = require('express');
const router = express.Router();

const Person = require('../models/people');

// get a list of people from the db
router.get('/people', function(req, res, next){
	/*Person.find({}).then(function(persons){
		res.send(persons);
	});*/
	Person.geoNear(
		{type:"Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
		{
			maxDistance: 100000,
			spherical: true
		}
		).then(function(persons){
			res.send(persons);
		});
});

// add a new person to the db
router.post('/people', function(req, res, next){
	Person.create(req.body).then(function(person){
		res.send(person);
	}).catch(next);
});

// update a person in the db
router.put('/people/:id', function(req, res, next){
	id = req.params.id;
	Person.findByIdAndUpdate({_id: id}, req.body).then(function(){
		Person.findOne({_id: id}).then(function(person){
			res.send(person);
		});
	});
});
 
// delete a person from the db
router.delete('/people/:id', function(req, res, next){
	id = req.params.id;
	Person.findByIdAndRemove({_id: id}).then(function(person){
		res.send(person);
	});
});

module.exports = router;

