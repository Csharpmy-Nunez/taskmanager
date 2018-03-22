import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from  '@angular/http';//It need to be inyected beacuse it is a service



@Injectable()
export class TaskService {

  constructor(private http: Http) { }


  getTasks(){
    return this.http.get('localhost:5000/api/tasks').map( res => res.json());
  }


  saveTask(task:Task){
    var headers  = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/task', JSON.stringify(task), {headers: headers}).map( task => task.json());
  }

}
interface Task {
  title: String,
  priority: String,
  decription: String
}
