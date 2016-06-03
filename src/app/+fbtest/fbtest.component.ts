import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-fbtest',
  templateUrl: 'fbtest.component.html',
  styleUrls: ['fbtest.component.css']
})
export class FbtestComponent implements OnInit {

  items: FirebaseListObservable<any>;

  constructor(public af: AngularFire) {

  }

  ngOnInit() {
    this.items = this.af.database.list('/items');
  }

  add(newName: string) {
    this.items.push({text: newName});
  }

  update(newSize: string, key: string) {
    this.items.update(key, {size: newSize});
  }

  deleteItem(key: string) {
    this.items.remove(key);
  }

  deleteEverything() {
    this.items.remove();
  }

}
