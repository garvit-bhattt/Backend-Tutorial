const express= require('express');
const app = express();
const fs = require('fs');

app.get("/health",(req,res)=>{
    res.json({message:"Server is up and running"})
})

//GET method
app.get("/tasks",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","UTF-8"));
    const todos = data.todos
    res.json({
        message:"Tasks fethed",
        Response:todos
    })



})



const PORT= 4800;
app.listen(PORT,()=>{
    console.log(`Server started running on port ${PORT}`)
})