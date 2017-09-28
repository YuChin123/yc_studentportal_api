var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema ({
	comment_text: String, 
	posted_by: String, 
	likes : Number, 
	createdAt: {type:Date, default: Date.now},
}	);



var ScheduleSchema = new Schema ({
	startTime: String,
	endTime: String,
	day: String,
	room : String
}	);



var CourseSchema = new Schema({
 name: String,
 description: String,
 code: String,
 type: String,
 lecturers: [String],
 students: [String],
 timetable: [ScheduleSchema],
 comment: [NewsSchema],
 createdAt : {type: Date, default: Date.now}
});


module.exports = mongoose.model('Course', CourseSchema);