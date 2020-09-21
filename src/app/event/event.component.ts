import { Component, OnInit } from '@angular/core';
import {Event} from './event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventList: Event[];

  constructor() {
    this.loadEvents();
   }

   loadEvents(){
     this.eventList= [
        {id:1, name: 'pippo', description: 'lalalala'},
        {id:2, name: 'gino', description: 'lolalola'},
     ];
   }

  ngOnInit(): void {
  }

}
