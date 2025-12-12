const express= require('express');
const taskRouter= express.Router();


taskRouter.get("/health", (req, res) => {
  res.json({ message: "Server is up and running" });
});

//GET method
taskRouter.get("/tasks", (req, res) => {
    const data = getTasks();
    res.json(data);
});
//POST method
taskRouter.post("/tasks", (req, res) => {
  const body = req.body;
  const data= getTasks();
  //setting id by checking the value of last id
  const newId= Number(data.todos[data.todos.length - 1].id) +1;
  const newTask={id:newId,...body};
  //pushing the code into data
  data.todos.push(newTask);
  //saving the data
  setTasks(data);

  res.status(201).json({
  message: "Task added successfully",
  task: newTask
});



});

