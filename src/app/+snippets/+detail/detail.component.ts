import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css']
})
export class DetailComponent implements OnInit {

  id: Observable<string>;

  constructor(r: ActivatedRoute) {
    this.id = r.params.map(params => params['id']);
  }

  ngOnInit() {
  }

}
