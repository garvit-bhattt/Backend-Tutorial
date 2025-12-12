const express = require('express');
const app = express();
const {taskRouter} = require("./task.router");
app.use(express.json);

app.use("/tasks",taskRouter);

const PORT=4800;
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})