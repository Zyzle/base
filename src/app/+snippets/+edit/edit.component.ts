import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['edit.component.css']
})
export class EditComponent implements OnInit {

  id: Observable<string>;

  constructor(r: ActivatedRoute) {
    this.id = r.params.map(params => params['id']);
  }

  ngOnInit() {
  }

}
