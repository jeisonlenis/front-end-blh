import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutosRoutingModule } from './autos-routing.module';
import { AutosComponent } from './autos.component';
import { AutosListComponent } from './autos-list/autos-list.component';
import { AutosAddComponent } from './autos-add/autos-add.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutosComponent, AutosListComponent, AutosAddComponent],
  imports: [
    CommonModule,
    AutosRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  exports: [AutosComponent],
})
export class AutosModule {}
