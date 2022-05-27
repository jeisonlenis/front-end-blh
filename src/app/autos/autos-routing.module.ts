import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutosAddComponent } from './autos-add/autos-add.component';
import { AutosListComponent } from './autos-list/autos-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: AutosListComponent,
  },

  {
    path: 'add',
    component: AutosAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutosRoutingModule {}
