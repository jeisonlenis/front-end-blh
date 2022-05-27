import { Component, ViewChild, OnInit } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Autos } from 'src/app/models/autos';

@Component({
  selector: 'app-autos-list',
  templateUrl: './autos-list.component.html',
  styleUrls: ['./autos-list.component.css'],
})
export class AutosListComponent implements OnInit {
  autos: any;

  columnas: string[] = ['Id', 'Modelo', 'Anio', 'Valor', 'Options'];

  dataSource;

  constructor(private autosService: AutosService, private router: Router) {}

  ngOnInit(): void {
    this.autosService.autosListService().subscribe((data) => {
      this.autos = data;
    });
    this.dataSource = new MatTableDataSource<Autos>(this.autos);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  addItem() {
    this.router.navigate(['/autos/add']);
  }
}
