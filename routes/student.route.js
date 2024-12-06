const {Router}=require('express')
const { addStudent, getAllStudents, editStudent, deleteStudent } = require('../controllers/student.controllers')
const router=Router()


router.post('/addStudent',addStudent)
router.put('/editStudent',editStudent)
router.post('/deleteStudent',deleteStudent)
router.get('/getStudent',getAllStudents)


module.exports=router