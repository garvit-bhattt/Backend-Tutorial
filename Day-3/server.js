const express = require("express");
const app = express();
const { getTasks, setTasks } = require("./functions");

app.use(express.json()); // This middleware converts JSON → JS object ( Required for POST / PUT / PATCH requests sending JSON )

app.get("/health", (req, res) => {
  res.json({ message: "Server is up and running" });
});

//GET method
app.get("/tasks", (req, res) => {
    const data = getTasks();
    res.json(data);
});
//POST method
app.post("/tasks", (req, res) => {
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

const PORT = 4800;
app.listen(PORT, () => {
  console.log(`Server started running on port ${PORT}`);
});

