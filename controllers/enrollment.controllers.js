const Enrollments=require('../models/enrollments.model')

const setEnrollment=async (req,res)=>{
    try {
       const enrollment=new Enrollments(
           req.body.course_id,
           req.body.student_id,
           )
         await enrollment.save()
     res.json(enrollment)    
    } catch (error) {
       console.log(error)
       res.json(error)
    }
       }

const findStudent=async (req,res)=>{
        try {
           const student=await Enrollments.findStudent(req.body.schedule)
           res.json(student)    
        } catch (error) {
           console.log(error)
           res.json(error)
        }
           }

           const findCourseBynumber=async (req,res)=>{
            try {
               const courses=await Enrollments.findCourse(req.body.number)
               console.log(req.body.number)
               res.json(courses)    
            } catch (error) {
               console.log(error)
               res.json(error)
            }
               }
               const findSudentBynumber=async (req,res)=>{
                try {
                   const courses=await Enrollments.findStudentByNumber(req.body.number)
                   console.log(req.body.number)
                   res.json(courses)    
                } catch (error) {
                   console.log(error)
                   res.json(error)
                }
                   }                     

module.exports={
    setEnrollment,
    findStudent,
    findCourseBynumber,
    findSudentBynumber
}       