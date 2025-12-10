//fs module is used to read file , it come with node 
const fs = require('fs');


//Reading a file using readFileSync Function
const data = JSON.parse(fs.readFileSync("./db.json","UTF-8")); //We need to specify encoding in reading 
console.log(data);
console.log(data.todos)


// Writing a file using writeFileSync Function
const newTask= {id:4,task:"Learn express",status:"ongoing"}
data.todos.push(newTask)
fs.writeFileSync("./db.json",JSON.stringify(data)) // We used stringify because wrtie file sync requires string 