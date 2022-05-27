import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClientesService } from 'src/app/services/clientes.service';
import { VendedoresService } from 'src/app/services/vendedores.service';
import { Ventas } from '../../models/ventas';
import { AutosService } from '../../services/autos.service';
import { VentasService } from '../../services/ventas.service';

@Component({
  selector: 'app-ventas-add',
  templateUrl: './ventas-add.component.html',
  styleUrls: ['./ventas-add.component.css'],
})
export class VentasAddComponent implements OnInit {
  ventas = new Ventas();
  public optionsauto: any[] = [];
  public optionscliente: any[] = [];
  public optionsvendedores: any[] = [];
  cliente = new FormControl();
  vendedor = new FormControl();

  public ventasForm!: FormGroup;
  filteredOptionsCliente: Observable<string[]>;
  filteredOptionsVendedor: Observable<string[]>;

  constructor(
    private autosService: AutosService,
    private clientesService: ClientesService,
    private vendedoresService: VendedoresService
  ) {
    this.optionsauto.push({ modelo: 'SELECCIONAR', value: '' });
  }

  ngOnInit(): void {
    this.autosService.autosListService().subscribe((data: any) => {
      this.optionsauto.push(...data);
    });

    this.clientesService.clientesListService().subscribe((data: any) => {
      this.optionscliente = data;
    });
    this.vendedoresService.vendedoresListService().subscribe((data: any) => {
      this.optionsvendedores = data;
    });

    this.filteredOptionsCliente = this.cliente.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterCliente(value))
    );
    this.filteredOptionsVendedor = this.vendedor.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterVendedor(value))
    );
  }

  private _filterCliente(value: string): string[] {
    const filterValue = value.toString().toLowerCase();

    return this.optionscliente.filter((option) =>
      option.toString().toLowerCase().includes(filterValue)
    );
  }

  private _filterVendedor(value: string): string[] {
    const filterValue = value.toString().toLowerCase();

    return this.optionsvendedores.filter((optionVendedor) =>
      optionVendedor.toString().includes(filterValue)
    );
  }
}
