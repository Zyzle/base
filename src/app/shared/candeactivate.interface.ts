import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}
