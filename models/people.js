const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
	type: {
		type: String,
		default: "Point"
	},
	coordinates: {
		type: [Number],
		index: "2dsphere"
	} 
})  

// create person Schema & model
const PersonSchema = new Schema({
	name: {
		type: String,
		required: [true, "Name field is required"]
	},
	age: {
		type: String,	
	},
	available: {
		type: Boolean,
		default: false
	},
	geometry: GeoSchema
})

const Person = mongoose.model('people', PersonSchema);
module.exports = Person;