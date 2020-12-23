import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {


 age: string[]
  @Input() selection: string;

  birthdays = [
    {
      name: "John Sina",
      birth: "11/30/2011"
    }, {
      name: "Barcy Washington",
      birth: "09/16/1992"
    }, {
      name: "Peter Parker",
      birth: "01/16/1992"
    }, {
      name: "Jimmy Shergil",
      birth: "12/12/2001"
    }, {
      name: "Alexander Alfred",
      birth: "02/09/1891"
    }, {
      name: "Krishna Gupta",
      birth: "12/01/1982"
    }, {
      name: "Sania Mirza",
      birth: "11/30/2011"
    }, {
      name: "Lata Pathak",
      birth: "10/31/1999"
    }
  ];
  // this takes input from the radio component
  sortBy: string;
  constructor(private app: AppComponent) {

  }

  ngOnChanges() {
   this.app.sortBy$.subscribe( data => {
     this.sortBy = data
this.arrangeItems()})
  }

  arrangeItems() {
     
    if(this.sortBy === "age"){
        for(let i=0;i < this.birthdays.length-1; i++) {
return this.compareDates(this.birthdays[i], this.birthdays[i+1])
 
  
        }
    }
    else{
      for(let i=0;i < this.birthdays.length-1; i++) {
        return this.compareNames(this.birthdays[i], this.birthdays[i+1])

      }
    }

}

    compareDates(a, b) {

this.birthdays.sort(function(a,b){
  
  if(new Date(a.birth) < new Date(b.birth)) { 
    return -1; }
  if(new Date(a.birth) > new Date(b.birth)) { 
    return 1; }
    return 0
})

return this.birthdays
    }

    compareNames(a, b) {

     this.birthdays.sort(function(a,b) {
      if(a.name < b.name) { 
        return -1; }
      if(a.name > b.name) { 
        return 1; }
        return 0
     }
     )
    return this.birthdays
    }

    getDate(str: string) {
      
      let newDate = new Date(str)
      return newDate;
    }
}
