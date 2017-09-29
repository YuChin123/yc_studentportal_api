var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Course = require('../model/course.js')

exports.getCourse = function(req,res){
	Course.find(function(err, courses) {
		if (err){
			res.send(err);
		}
		else {
			 res.json(courses);
		}

 });

}


exports.postCourse = function(req,res){
	var course = new Course();
	course.name = req.body.name;
	course.description = req.body.description;
	course.code = req.body.code;
	course.type = req.body.type;
	course.lecturers =[];
	course.timetable = [];
	course.students = [];
	course.news = []
	course.save(function(err) {
		if (err){
			res.send(err);
		}
		else {
			res.json({ message: 'Course created!' });
		}
			 
		
	});
}

exports.editCourse = function(req,res){

}

exports.deleteCourse = function(req,res){

}

exports.getCourseById = function(req,res){

	Course.findById(req.params.course_id, function(err, course) {
	 if (err){
	 	 res.send(err);
	 }
	 else {
	 	res.json(course);
	 }
 });
}

exports.postNews = function(req,res){
	
Course.findById(req.params.course_id, function(err, course) {
	 if (err){
	 	 res.send(err);
	 }
	 else {
	 	var newNews = {
	 		comment : req.body.comment_text,
	 		posted_by : req.body.posted_by,
	 		likes : req.body.likes,
	 	}
	 	course.news.push(newNews)
	 	course.save(function(err) {
		if (err){
			res.send(err);
		}
		else {
			res.json({ message: 'News added!!' });
		}
	 
 });
}
}
)
}

exports.getNews = function(req,res){
	News.find(function(err, courses) {
		if (err){
			res.send(err);
		}
		else {
			 res.json(news);
		}

 });

}




exports.editNews = function(req,res){

}

exports.deleteNews = function(req,res){
	News.findById(req.params.news_id)
	News.remove({
		_id: req.params.news_id
	}, function(err, news) {
		if (err)
			res.send(err);
		res.json({ message: 'Successfully deleted' });
	}); 
}





exports.createTimetable = function(req,res){
Course.findById(req.params.course_id, function(err, course) {
	 if (err){
	 	 res.send(err);
	 }
	 else {
	 	var newTimetable = {
	 		startTime : req.body.startTime,
	 		endTime : req.body.endTime,
	 		day : req.body.day,
	 		room: req.body.room
	 	}
	 	course.timetable.push(newTimetable)
	 	course.save(function(err) {
		if (err){
			res.send(err);
		}
		else {
			res.json({ message: 'Course timetable added!!' });
		}
	 
 });
}
});

//news 
}
