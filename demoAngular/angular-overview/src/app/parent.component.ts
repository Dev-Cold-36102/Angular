import {Component, ViewChild} from "@angular/core";
import {ChildComponent} from "./child.component";

@Component({
  selector: 'app-parent',
  template: `
    <app-child #child1></app-child>
    <button (click)="add()">ADD</button>
    <app-child #child2></app-child>
    <button (click)="addNUmber(child2)">ADD</button>
  `
})

export class ParentComponent {
  @ViewChild(ChildComponent)
  myChild1: ChildComponent;
  myChild2: ChildComponent;

  add() {
    this.myChild1.value++;
  }
  addNUmber(child:ChildComponent){
   child.value++;
  }
}
