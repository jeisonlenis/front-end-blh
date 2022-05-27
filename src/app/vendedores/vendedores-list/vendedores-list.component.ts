import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VendedoresService } from '../../services/vendedores.service';

@Component({
  selector: 'app-vendedores-list',
  templateUrl: './vendedores-list.component.html',
  styleUrls: ['./vendedores-list.component.css'],
})
export class VendedoresListComponent implements OnInit {
  vendedores: any;

  columnas: string[] = [
    'Id',
    'Nombre',
    'Apellido',
    'Numero de Documento',
    'Options',
  ];

  dataSource: MatTableDataSource<Object>;

  constructor(
    private vendedoresService: VendedoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vendedoresService.vendedoresListService().subscribe((data) => {
      this.vendedores = data;
    });
  }

  addItem() {
    this.router.navigate(['/vendedores/add']);
  }
}
