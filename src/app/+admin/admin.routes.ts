import { AdminComponent } from './admin.component';

import { AuthGuard } from '../shared/auth.guard';

export const ADMIN_ROUTES = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];
