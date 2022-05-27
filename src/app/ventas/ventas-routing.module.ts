import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasAddComponent } from './ventas-add/ventas-add.component';
import { VentasListComponent } from './ventas-list/ventas-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: VentasListComponent,
  },

  {
    path: 'add',
    component: VentasAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasRoutingModule {}
