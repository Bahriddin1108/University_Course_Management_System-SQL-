const pool=require('../config/db')
const {v4:uuidv4}=require('uuid')
module.exports=class Courses{
    constructor(name,instructor,schedule,max,created_at,updated_at){

this.name=name,
this.instructor=instructor,
this.schedule=schedule,
this.max=max,
this.created_at=created_at,
this.updated_at=updated_at

    }
async save(){
    try {
        const id=uuidv4()
    const created_at=new Date()
    const newCourse=await pool.query(
        `INSERT INTO public."Courses" (id,course_name,instructor,schedule,max_students,created_at) 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [id,this.name,this.instructor,this.schedule,this.max,created_at]    
    )
   
   return newCourse.rows
    } catch (error) {
        console.log(error)
        return error
    }
}

static async findAll(){
    const courses=await pool.query(`SELECT * FROM public."Courses"`)
    return courses.rows
}

static async editById(id,name,instructor,schedule,max){
    try {
        
    const updated_at=new Date()
   await pool.query(
        `UPDATE public."Courses" SET course_name=$1, 
        instructor=$2, schedule=$3, max_students=$4, updated_at=$5 WHERE id=$6 `,
    [name,instructor,schedule,max,updated_at,id]    
    )
 
    } catch (error) {
        console.log(error)
        return error
    }
}

static async findByTeacher(instructor){
    try {
    const courses= await pool.query(
        `SELECT course_name FROM public."Courses" WHERE instructor=$1 `,
    [instructor]    
    )
    return courses.rows
 
    } catch (error) {
        console.log(error)
        return error
    }
}

static async deleteById(id){
    try {
        
    const updated_at=new Date()
   await pool.query(
        `DELETE FROM public."Courses" WHERE id=$1 `,
    [id]    
    )
 
    } catch (error) {
        console.log(error)
        return error
    }
}

}