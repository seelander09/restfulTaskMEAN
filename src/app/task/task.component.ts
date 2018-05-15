import { Component, OnInit, Input } from '@angular/core'; // add Input to our imports

@Component({
  selector: 'app-task', // use this to generate a HTML tag for yourself.
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskToShow: any;  // use the @Input decorator to indicate this comes from the parent if loop line 59.
  constructor() { }

  ngOnInit() {
  }

}
