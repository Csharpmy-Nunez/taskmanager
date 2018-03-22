import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  

  constructor(private tasksService:TaskService) { }

  ngOnInit() {
    this.getAllTasks();
  }

  //Methods
  getAllTasks(){
    this.tasksService.getTasks().subscribe( (tasks) => {
      console.log(`Data ==> ${tasks}`);
    });
  }




}

interface Task {
  title: String,
  priority: String,
  decription: String
}
