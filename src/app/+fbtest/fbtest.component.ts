import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-fbtest',
  templateUrl: 'fbtest.component.html',
  styleUrls: ['fbtest.component.css']
})
export class FbtestComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    //this.items = af.database.list('/items');
  }

  ngOnInit() {
  }

  login(){
    this.af.auth.login();
  }

}
