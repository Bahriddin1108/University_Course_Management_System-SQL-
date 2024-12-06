const express=require('express')
const app=express()


app.use(express.json())



const PORT=process.env.PORT||5000


app.use(require('./routes/courses.route'))
app.use(require('./routes/student.route'))
app.use(require('./routes/enrollment.route'))


app.listen(PORT,()=>{
console.log("Server running on Port:"+PORT)
})
