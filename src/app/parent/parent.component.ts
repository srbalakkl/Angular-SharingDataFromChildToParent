import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  standalone: false
})
export class ParentComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  parent_count = 10;

  @ViewChild(ChildComponent, {static: true}) private child!: ChildComponent;

  ngAfterViewInit() {
    this.child.CD.subscribe(c => {
      console.log('CD=', c)
      console.log('Child Variable==', this.child.childVariable)
    })

  }

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  parentMethod($event: string) {
    console.log($event);
  }

  parentMethodForCDevent($event: number) {
    console.log($event);
  }

  protected readonly Number = Number;
}
