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

exports.getTimetableForCourse = function(req,res){


	
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

exports.postNews = function(req,res){
	var news = new News();
	course.comment = req.body.comment_text;
	course.posted_by = req.body.posted_by;
	course.likes = req.body.likes;

	course.save(function(err) {
		if (err){
			res.send(err);
		}
		else {
			res.json({ message: 'News created!' });
		}
			 
		
	});
}

exports.editNews = function(req,res){

}

exports.deleteNews = function(req,res){

}