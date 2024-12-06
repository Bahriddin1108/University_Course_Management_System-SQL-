const {Router}=require('express')
const { addCourse, editCourse, getAllCourses, deleteCourses, findCourse } = require('../controllers/cource.controllers')
const router=Router()


router.post('/addCourses',addCourse)
router.put('/editCourses',editCourse)
router.get('/getCourses',getAllCourses)
router.get('/findCourse',findCourse)
router.post('/deleteCourses',deleteCourses)

module.exports=router