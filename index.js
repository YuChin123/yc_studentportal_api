var express = require('express');

var app = express();

var auth = require('./controllers/auth.js')();

var mongoose = require('mongoose');

mongoose.connect('mongodb://yuchin123:yuchin123@ds147964.mlab.com:47964/yc_studentportal')

var bodyParser = require('body-parser');

var router = express.Router(); 
var courseController = require('./controllers/course.js')
var userController = require('./controllers/user.js')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(auth.initialize());


router.route('/courses')
.post(courseController.postCourse)
.get(auth.authenticate(), courseController.getCourse)

router.route('/courses/:course_id')
.get(courseController.getCourseById)

router.route('/courses/:course_id/timetables')
.post(courseController.createTimetable)


router.route('/courses/:course_id/news')
.post(courseController.postNews)




router.route('/login')
.post(userController.getUserToken)

router.get('/', function(req, res) {
 res.json({ message: 'hooray! welcome to our api!' });
});




app.use('/api', router);

app.listen(process.env.PORT || 8080);