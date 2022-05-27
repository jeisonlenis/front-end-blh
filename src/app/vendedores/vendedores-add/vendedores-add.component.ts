import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vendedores } from 'src/app/models/vendedores';
import { VendedoresService } from 'src/app/services/vendedores.service';

@Component({
  selector: 'app-vendedores-add',
  templateUrl: './vendedores-add.component.html',
  styleUrls: ['./vendedores-add.component.css'],
})
export class VendedoresAddComponent implements OnInit {
  public vendedoresForm!: FormGroup;

  public vendedor = new Vendedores();

  constructor(
    private formBuilder: FormBuilder,
    private vendedoresService: VendedoresService
  ) {
    this.vendedoresForm = this.formBuilder.group({
      modelo: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      anio: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern('[0-9 ]*'),
        ],
      ],
      color: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    });
  }

  ngOnInit(): void {}

  saveItem(): void {
    this.vendedor.nombre = this.vendedoresForm.value.modelo;
    this.vendedor.apellido = this.vendedoresForm.value.anio;
    this.vendedor.numero_id = this.vendedoresForm.value.color;

    if (this.vendedoresForm) {
      this.vendedoresService.vendedoresAddService(this.vendedor).subscribe();
    }
  }
}
