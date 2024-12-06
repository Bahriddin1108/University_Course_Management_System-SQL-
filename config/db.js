const Pool=require('pg').Pool
const pool=new Pool({
    user:'postgres',
    password:'admin',
    database:'University',
    host:'localhost',
    port:5432

}

)

module.exports=pool