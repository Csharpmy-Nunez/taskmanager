const express = require('express');
const router = express.Router();

const Task = require('../models/task');



//Get All Tasks
router.get('/api/tasks', function(req, res){
  Task.find().then( tasks => res.json({success: true, tasks: tasks}));
});


router.post('/', (req, res) => {

  const newTask  = {
    title: req.body.title,
    priority: req.body.priority,
    description: req.body.description
  }

  new Task(newTask).save().then( task => {
    return res.json({success: true, message: 'Task has been saved'});
  });

});

module.exports = router;