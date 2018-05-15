import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
      // this.getTasks();
   }

   getTasks(){  // makes a http request
    // let tempObservable = this._http.get('/tasks');     // our http response is an Observable, store it in a variable
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));      // subscribe to the Observable and provide the code we would like to do with our data from the response
    return this._http.get('/tasks')
 }
    deleteTasks(id){
    return this._http.delete('/tasks/' + id)
    }

    showTask(id){
    return this._http.get('/tasks/' + id)
    }

    createTask(input){
    return this._http.post('/tasks', input)
    }

    updateTask(input){
        return this._http.put('/tasks/' + input._id, input)     // dont quite get the inupt._id part
    }
}
