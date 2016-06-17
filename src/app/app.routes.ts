import { provideRouter, RouterConfig } from '@angular/router';

import { HOME_ROUTES } from './+home/home.routes';
import { HIGHLIGHT_ROUTES } from './+highlight-test/highlight-test.routes';
import { ADMIN_ROUTES } from './+admin/admin.routes';
import { SNIPPETS_COMPONENTS } from './+snippets/snippets.routes';

const routes: RouterConfig = [
  ...HOME_ROUTES,
  ...HIGHLIGHT_ROUTES,
  ...ADMIN_ROUTES,
  ...SNIPPETS_COMPONENTS
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
