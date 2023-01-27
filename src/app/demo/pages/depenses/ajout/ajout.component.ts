import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { DepensesService } from "src/app/demo/services/depenses/depenses.service";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { ThemePalette } from "@angular/material/core";
import {
  MatSlideToggle,
  MatSlideToggleModule,
} from "@angular/material/slide-toggle";
import { MatSelect, MatSelectModule } from "@angular/material/select";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { IDepense, IResponse } from "src/app/demo/interfaces/interface";
import { ToastService } from "src/app/theme/toast/toast.service";

@Component({
  selector: "app-ajout",
  templateUrl: "./ajout.component.html",
  styleUrls: ["./ajout.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
})
export class AjoutComponent implements OnInit {
  submitted: boolean = false;
  loading: boolean = false;
  error: boolean = false;
  motif: string = "";

  color: ThemePalette = "accent";
  checked = false;
  disabled = false;

  form: FormGroup = new FormGroup({
    date: new FormControl(new Date()),
    motif: new FormControl(""),
    montant: new FormControl(0),
  });

  constructor(
    private depenseService: DepensesService,
    private formBuilder: FormBuilder,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      date: ["", Validators.required],
      motif: ["", Validators.required],
      montant: ["", Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  addDepense(): void {
    this.loading = true;

    if (this.form.invalid) {
      this.loading = false;
    }

    const value = this.form.value;
    
    const data: IDepense = {
      date: value.date,
      motif: value.motif,
      montant: value.montant,
      atelier: {},
    };

    const body = { "data": data };

    this.depenseService.add(body).subscribe((reponse: IResponse) => {
      if (reponse.success) {
        this.loading = false;
        this.toast.ShowSuccess("Depense", "Saisie des depenses");
      } else {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
