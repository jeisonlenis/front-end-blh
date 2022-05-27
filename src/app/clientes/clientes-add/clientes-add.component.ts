import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clientes } from 'src/app/models/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-add',
  templateUrl: './clientes-add.component.html',
  styleUrls: ['./clientes-add.component.css'],
})
export class ClientesAddComponent implements OnInit {
  public clientesForm!: FormGroup;

  public cliente = new Clientes();

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService
  ) {
    this.clientesForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      apellido: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      numero_id: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(10),
          Validators.pattern('[0-9 ]*'),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  saveItem(): void {
    this.cliente.nombre = this.clientesForm.value.modelo;
    this.cliente.apellido = this.clientesForm.value.anio;
    this.cliente.numero_id = this.clientesForm.value.color;

    if (this.clientesForm) {
      this.clientesService.clientesAddService(this.cliente).subscribe();
    }
  }
}
