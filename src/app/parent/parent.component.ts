import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css'],
    standalone: false
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = ['item1','item2','item3','item4'];

  addItem(newItem:string){
    this.items.push(newItem);
  }


  parentMethod($event: string) {
    console.log($event);
  }

  parentMethodForCDevent($event: number) {
    console.log($event);
  }
}
