import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VentasService } from '../../services/ventas.service';

@Component({
  selector: 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls: ['./ventas-list.component.css'],
})
export class VentasListComponent implements OnInit {
  ventas: any;

  columnas: string[] = [
    'Id',
    'Vendedor',
    'Cliente',
    'Modelo',
    'Anio Venta',
    'Options',
  ];

  dataSource: MatTableDataSource<Object>;

  constructor(private ventasService: VentasService, private router: Router) {}

  ngOnInit(): void {
    this.ventasService.ventasListService().subscribe((data) => {
      this.ventas = data;
    });
  }

  addItem() {
    this.router.navigate(['/ventas/add']);
  }
}
