import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {

  @Output() orderBy: EventEmitter<string> = new EventEmitter()

  


  model;
  constructor(private app: AppComponent) {
    this.model = {
      sortBy: ""
    }
  }

  returnModelState() {
    //return the the model.sortBy vale
    return "";
  }


  age(){
    this.app.sortBy.next("age")
   
  }

  name(){
this.app.sortBy.next("name")
  }
}
