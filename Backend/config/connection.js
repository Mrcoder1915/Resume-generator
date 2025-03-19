const mysql = require("mysql");
const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "resumedb"
}
const pool = mysql.createPool(config);
module.exports  = (query, params = []) => {
    return new Promise((resolve, reject)  => {
        pool.getConnection((err, con) => {
            if(err){
                reject(err)
                console.log("error in connection: ", err)
                
            }else{
                con.query(query, params, (err , result) => {
                    if(err){           
                        console.log("error in query: ", err)
                        console.log('The solution is: ', result[0].solution);
                    }else{
                        resolve(result)
                    }
                })
            }
        })
    })
}