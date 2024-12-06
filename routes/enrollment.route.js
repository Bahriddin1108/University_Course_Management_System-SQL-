const {Router}=require('express')
const { setEnrollment, findStudent, findCourseBynumber, findSudentBynumber } = require('../controllers/enrollment.controllers')

const router=Router()


router.post('/setEnrollment',setEnrollment)
router.get('/getStudentByschedule',findStudent)

router.get('/getCourseByNumber',findCourseBynumber)
router.get('/getStudentByNumber',findSudentBynumber)


module.exports=router