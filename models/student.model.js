const pool=require('../config/db')
const {v4:uuidv4}=require('uuid')
module.exports=class Students{
    constructor(name,age,major){

this.name=name,
this.age=age,
this.major=major


    }
async save(){
    try {
        const id=uuidv4()
    const created_at=new Date()
    const newStudent=await pool.query(
        `INSERT INTO public."Students" (id,name,age,major,created_at) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [id,this.name,this.age,this.major,created_at]    
    )
    return newStudent.rows
    } catch (error) {
        console.log(error)
        return error
    }
}

static async findAll(){
    const students=await pool.query(`SELECT * FROM public."Students"`)
    return students.rows
}

static async editById(id,name,age,major){
    try {
        
    const updated_at=new Date()
   await pool.query(
        `UPDATE public."Students" SET name=$1, 
        age=$2, major=$3, updated_at=$4 WHERE id=$5 `,
    [name,age,major,updated_at,id]    
    )
 
    } catch (error) {
        console.log(error)
        return error
    }
}


static async deleteById(id){
    try {
        
    const updated_at=new Date()
   await pool.query(
        `DELETE FROM public."Students" WHERE id=$1 `,
    [id]    
    )
 
    } catch (error) {
        console.log(error)
        return error
    }
}

}