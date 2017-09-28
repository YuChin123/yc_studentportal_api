var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentsSchema = new Schema ({
	name: String, 
	email: String, 
	phone : Number, 
	createdAt: {type:Date, default: Date.now},
}	);


module.exports = mongoose.model('Student', StudentSchema);