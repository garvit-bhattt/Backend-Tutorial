//fs module is used to read file , it come with node 
const fs = require('fs');


//Reading a file using readFileSync Function
const data = JSON.parse(fs.readFileSync("./db.json","UTF-8")); //We need to specify encoding in reading 
console.log(data);
console.log(data.todos)
