const Courses=require('../models/course.model')

const addCourse=async (req,res)=>{
 try {
    console.log(req.body)
    const courses=new Courses(
        req.body.name,
        req.body.instructor,
        req.body.schedule,
        req.body.max,
       )
      await courses.save()
  res.json(courses)    
 } catch (error) {
    res.json(error)
 }
    }
    const editCourse=async (req,res)=>{
        const courses=await Courses.findAll()
        const user= courses.find(user=>user.id===req.body.id)
        const name=req.body.name==null?user.course_name:req.body.name
        const instructor=req.body.instructor==null ? user.instructor : req.body.instructor
        const schedule=req.body.schedule==null ? user.schedule : req.body.schedule
        const max= req.body.max==null ? user.max_students : req.body.max
        try {
        await Courses.editById(
            req.body.id,
            name,
            instructor,
            schedule,
            max
        )
        res.json('Succesfully updated')
    } catch (error) {
        res.json(error)
    }
    
    }

    const getAllCourses= async(req,res)=>{
        try {
         
        const courses=await Courses.findAll()
        console.log(courses)
        res.json(courses)   
        } catch (error) {
            res.json(error)
        }
    }
    
    const findCourse= async(req,res)=>{
        try {
            const courses=await Courses.findByTeacher(req.body.instructor)
            console.log(req.body.instructor)
            console.log(courses)
            res.json(courses)
        } catch (error) {
            res.json(error)
        }
    }
     
    const deleteCourses= async(req,res)=>{
        try {
            await Courses.deleteById(req.body.id)
            res.json("Successfully deleted")
            
        } catch (error) {
            res.json(error)        
        }
        }
module.exports={
    addCourse,
    editCourse,
    getAllCourses,
    deleteCourses,
    findCourse
}