import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css'],
})
export class ClientesListComponent implements OnInit {
  clientes: any;

  columnas: string[] = [
    'Id',
    'Nombre',
    'Apellido',
    'Numero de Documento',
    'Options',
  ];

  dataSource: MatTableDataSource<Object>;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientesService.clientesListService().subscribe((data) => {
      this.clientes = data;
    });
  }

  addItem() {
    this.router.navigate(['/clientes/add']);
  }
  e;
}
