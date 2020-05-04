import {Component } from "@angular/core";
import {NEVER} from "rxjs";

@Component({
  selector: 'app-child',
  template: `
    <h3>{{age}}</h3>
   <h3>{{value}}</h3>
  `
})

export class ChildComponent {
  age=9;
 value=0;
}
