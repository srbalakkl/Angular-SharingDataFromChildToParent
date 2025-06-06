import {Component, model, OnInit, output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: false
})
export class ChildComponent implements OnInit {

  //In Parent to Child Relationship we use PropertyBinding, but in ChildToParent We use EventEmitter configuration to send the data to parent as custom events.

  constructor() {
  }

  childVariable = 'ChildVariable';
  count = model(0)

  ngOnInit(): void {
    this.addChildData('hello From child')
  }

  //@Output() marks a property in a child component as a doorway through which data can travel from the child to the parent.
  // @Output() newItemEvent = new EventEmitter<string>();//old way to use @output decorator.
  readonly newItemEvent = output<string>({alias: 'newItemEventsss'});
  readonly childData = output<string>();
  readonly CD = output<number>();

  // To raise an event, an @Output() must have the type of EventEmitter, Which is a class in @angular/core that you use to emit custom events.
  addNewItem(value: string) {
    this.newItemEvent.emit(value)
    // this.childData.emit('Data from Child');
  }

  addChildData(value: string) {
    this.childData.emit(value);
  }

  showString(val: string) {
    return val + ' friends !';
  }

}
