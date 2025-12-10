const express= require('express');
const app = express();

app.get("/health",(req,res)=>{
    res.json({message:"Server is up and running"})
})




const PORT= 4800;
app.listen(PORT,()=>{
    console.log(`Server started running on port ${PORT}`)
})