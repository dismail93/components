import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 sortBy: BehaviorSubject<string> = new BehaviorSubject<string>(null);
sortBy$: Observable<string> = this.sortBy.asObservable()

selection:string
onSelect(event: any){
  this.selection = event;
  console.log(this.selection)
  
}

}
