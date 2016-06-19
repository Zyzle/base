import { SnippetsComponent } from './snippets.component';
import { ListComponent } from './+list/list.component';
import { DetailComponent } from './+detail/detail.component';
import { EditComponent } from './+edit/edit.component';
import { AddComponent } from './+add/add.component';

export const SNIPPETS_COMPONENTS = [
  {
    path: 'snippets',
    component: SnippetsComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'add', component: AddComponent },
      { path: ':id', component: DetailComponent },
      { path: ':id/edit', component: EditComponent }
    ]
  }
];
