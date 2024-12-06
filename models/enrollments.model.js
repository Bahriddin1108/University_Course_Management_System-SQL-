const pool=require('../config/db')
const {v4:uuidv4}=require('uuid')
module.exports=class Courses{
    constructor(course_id,student_id){
this.course_id=course_id,
this.student_id=student_id
    }
async save(){
    try {
    const id=uuidv4()
    const created_at=new Date()
    const enrollment=await pool.query(
        `INSERT INTO public."Enrollments" (id,student_id,course_id,created_at) 
        VALUES ($1, $2, $3, $4) RETURNING *`,
    [id,this.student_id,this.course_id,created_at]    
    )
   
   return enrollment.rows
    } catch (error) {
        console.log(error)
        return error
    }
}

static async findStudent(schedule){
    try {
    const students= await pool.query(
        `SELECT public."Students".name FROM public."Enrollments"
JOIN public."Students" ON public."Enrollments".student_id = public."Students".id
JOIN public."Courses" ON public."Enrollments".course_id = public."Courses".id
WHERE schedule=$1 `,
    [schedule]    
    )
    return students.rows
 
    } catch (error) {
        console.log(error)
        return error
    }
}

static async findCourse(number){
    try {
    const courses= await pool.query(
        `SELECT public."Courses".course_name FROM public."Enrollments"
JOIN public."Students" ON public."Enrollments".student_id = public."Students".id
JOIN public."Courses" ON public."Enrollments".course_id = public."Courses".id
WHERE max_students<$1 `,
    [number]    
    )
    console.log(courses.rows)

    return courses.rows
 
    } catch (error) {
        console.log(error)
        return error
    }
}

static async findStudentByNumber(number){
    try {
    const courses= await pool.query(
        `SELECT public."Students".name FROM public."Enrollments"
JOIN public."Students" ON public."Enrollments".student_id = public."Students".id
JOIN public."Courses" ON public."Enrollments".course_id = public."Courses".id
WHERE max_students=$1 `,
    [number]    
    )
    console.log(courses.rows)

    return courses.rows
 
    } catch (error) {
        console.log(error)
        return error
    }
}






}