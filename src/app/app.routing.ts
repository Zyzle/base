import { Routes, RouterModule } from '@angular/router';

import { HOME_ROUTES } from './+home/home.routes';
import { LOGIN_ROUTES } from './+login/login.routes';
import { ADMIN_ROUTES } from './+admin/admin.routes';
import { SNIPPETS_COMPONENTS } from './+snippets/snippets.routes';

import { AuthGuard, CanDeactivateGuard } from './shared';

const routes: Routes = [
  ...HOME_ROUTES,
  ...LOGIN_ROUTES,
  ...ADMIN_ROUTES,
  ...SNIPPETS_COMPONENTS
];

export const APP_ROUTING_PROVIDERS = [
  AuthGuard,
  CanDeactivateGuard
];

export const ROUTING = RouterModule.forRoot(routes);
