import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Autos } from 'src/app/models/autos';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-autos-add',
  templateUrl: './autos-add.component.html',
  styleUrls: ['./autos-add.component.css'],
})
export class AutosAddComponent implements OnInit {
  public autosForm!: FormGroup;

  public auto = new Autos();
  autos: any;

  constructor(
    private formBuilder: FormBuilder,
    private autosService: AutosService
  ) {
    this.autosForm = this.formBuilder.group({
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
      valor: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
          Validators.pattern('[0-9  ]*'),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  refresh(): void {
    this.autosService.autosListService().subscribe((data) => {
      this.autos = data;
    });
  }

  saveItem(): void {
    this.auto.modelo = this.autosForm.value.modelo;
    this.auto.anio = this.autosForm.value.anio;
    this.auto.valor = this.autosForm.value.valor;

    if (this.autosForm) {
      this.autosService.autosAddService(this.auto).subscribe();
      this.refresh();
    }
  }
}
