const Students = require('../models/student.model')

const addStudent=async (req,res)=>{
 try {
    const students=new Students(
        req.body.name,
        req.body.age,
        req.body.major,
        )
      await students.save()
  res.json(students)    
 } catch (error) {
    console.log(error)
    res.json(error)
 }
    }
    const editStudent=async (req,res)=>{
        const students=await Students.findAll()
        const user= students.find(user=>user.id===req.body.id)
        const name=req.body.name==null?user.name:req.body.name
        const age=req.body.age==null ? user.age : req.body.age
        const major= req.body.major==null ? user.major : req.body.major
        try {
        await Students.editById(
            req.body.id,
            name,
            age,
            major
        )
        res.json('Succesfully updated')
    } catch (error) {
        res.json(error)
    }
    
    }

    const getAllStudents= async(req,res)=>{
        try {
         
        const students=await Students.findAll()
        
        res.json(students)   
        } catch (error) {
            res.json(error)
        }
    }
     
    const deleteStudent= async(req,res)=>{
        try {
            await Courses.deleteById(req.body.id)
            res.json("Successfully deleted")
            
        } catch (error) {
            res.json(error)        
        }
        }
module.exports={
    addStudent,
    editStudent,
    getAllStudents,
    deleteStudent
}