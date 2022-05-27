import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendedoresAddComponent } from './vendedores-add/vendedores-add.component';
import { VendedoresListComponent } from './vendedores-list/vendedores-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: VendedoresListComponent,
  },

  {
    path: 'add',
    component: VendedoresAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedoresRoutingModule {}
