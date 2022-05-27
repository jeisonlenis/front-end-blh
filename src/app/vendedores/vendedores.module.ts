import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedoresRoutingModule } from './vendedores-routing.module';
import { VendedoresComponent } from './vendedores.component';
import { VendedoresAddComponent } from './vendedores-add/vendedores-add.component';
import { VendedoresListComponent } from './vendedores-list/vendedores-list.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VendedoresComponent,
    VendedoresAddComponent,
    VendedoresListComponent,
  ],
  imports: [
    CommonModule,
    VendedoresRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  exports: [VendedoresComponent],
})
export class VendedoresModule {}
