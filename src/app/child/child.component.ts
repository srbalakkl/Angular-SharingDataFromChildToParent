import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //In Parent to Child Relationship we use PropertyBinding but in ChildToParent We use EventEmitter configuration to send the data to parent as custom events.

  constructor() { }

  ngOnInit(): void {
  }

  //@Output() marks a property in a child component as a doorway through which data can travel from the child to the parent.
  @Output() newItemEvent = new EventEmitter<string>();

  // To raise an event, an @Output() must have the type of EventEmitter, Which is a class in @angular/core that you use to emit custom events.
  addNewItem(value : string){
    this.newItemEvent.emit(value)
  }


}
