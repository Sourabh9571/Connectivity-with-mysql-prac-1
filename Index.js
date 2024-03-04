
const express = require('express');
const mysql = require('mysql');

const app = express();
const dp = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"crud"
});

app.get('/students',(req,res)=>{
    const qury = "SELECT *  FROM students";
    dp.query(qury,(err,data)=>{
        if(err){
            return res.json(err);
        }
        else{
            res.json(data);
        }
    })

})
app.listen(5000,()=>{
    console.log("Listening ......");
})