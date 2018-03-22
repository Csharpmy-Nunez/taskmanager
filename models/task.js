const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  priority: String,
  description: String
});

//Create collection and add schema
const Task = mongoose.model('Task', TaskSchema);


//Export
module.exports = Task;