import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Restful Tasks API';
    tasks: any;
    details: any;
    newtask: any;
    editTask: any;

    constructor(private _httpService: HttpService){  // this allows you to use the class from our service file.
    }
    ngOnInit(){  // runs on component creation.
        this.newtask = {title:"", description:""}
        this.details = {}; //need this because using any in export class
        this.editTask = {title:"", description:""}
    }
    getTasksFromService(){  //shows all tasks on click of get tasks
        let observable = this._httpService.getTasks()
        observable.subscribe(data => {
            console.log("Got our data!", data)
            this.tasks = data;
        })
    }
    deleteTasksFromService(id){
        let observable = this._httpService.deleteTasks(id)
        observable.subscribe(data => {
            console.log("we hit delete", data)
            this.getTasksFromService();
        })
    }
    showTaskFromService(id){
        let observable = this._httpService.showTask(id)
        observable.subscribe(data => {
            console.log("we are in show task function", data)
            this.details = data;
        })
    }
    createTaskFromService(){
        console.log("we are in createTask function", this.newtask)
        let observable = this._httpService.createTask(this.newtask)
        observable.subscribe(data => {
            console.log("we are oberving createTask", data)
            this.details = data;
        })
        this.getTasksFromService();
        this.newtask = { title: "", description: "" }
    }

    sendToEdit(){
        this.editTask = this.details;  //this is taking details and making it equal to editTask
        this.details = {};
    }

    updateFromService(){
        let observable = this._httpService.updateTask(this.editTask)
        observable.subscribe(data =>{
            console.log("updated data");

        })
        this.getTasksFromService();
        this.showTaskFromService(this.editTask._id);
        this.editTask = {};
    }
    taskToShow(task){
        this.selectedTask = task;

    }

}
