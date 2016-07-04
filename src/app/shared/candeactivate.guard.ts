import { CanDeactivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { CanComponentDeactivate } from './candeactivate.interface';

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
