const express = require('express');
const router = express.Router();

// get a list of people from the db
router.get('/people', function(req, res){
	res.send({type: 'GET'});
});

// add a new person to the db
router.post('/people', function(req, res){
	res.send({type: 'POST'});
});

// update a person in the db
router.get('/people/:id', function(req, res){
	res.send({type: 'PUT'});
});

// delete a person from the db
router.get('/people/:id', function(req, res){
	res.send({type: 'DELETE'});
});

module.exports = router;