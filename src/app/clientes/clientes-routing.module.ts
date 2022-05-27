import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesAddComponent } from './clientes-add/clientes-add.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ClientesListComponent,
  },

  {
    path: 'add',
    component: ClientesAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
