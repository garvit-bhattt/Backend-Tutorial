const fs = require("fs");
//getTasks Fucntion
function getTasks() {
  const data = fs.readFileSync("./db.json", "UTF-8");
  return JSON.parse(data);
}

//setTasks Function
function setTasks(data) {
  fs.writeFileSync("./db.json", JSON.stringify(data));
}
module.exports = { getTasks , setTasks};
