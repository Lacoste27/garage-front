import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/demo/services/users/users.service';
import { IResponse, IVoiture } from 'src/app/demo/interfaces/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [CommonModule, SharedModule, NgbDropdownModule, ColorPickerModule],
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {
  form: FormGroup = new FormGroup({
    numero: new FormControl(''),
    marque: new FormControl(''),
    model: new FormControl(''),
  });
  submitted: boolean = false;
  loading: boolean = false;
  error: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private userService: UsersService, private router: Router,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      numero: ['', Validators.required],
      marque: ['', Validators.required],
      model: ['', Validators.required],
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.loading = true;
    this.submitted = true;
    if (this.form.invalid) {
      this.loading = false;
      return;
    }
    console.log(this.form.value);
    //Création de l'interface du véhicule
    let voiture: IVoiture = {
      numero: this.form.value.numero,
      marque: this.form.value.marque,
      model: this.form.value.model,
    };

    console.log(voiture)

    // Ajout du véhicule
    this.userService.ajouterVoiture(voiture).subscribe((reponse: IResponse) => {
      if (reponse.success == true) {
        this.loading = false;
        this.router.navigateByUrl('/users/voitures/liste');
      } else {
        this.error = true;
        this.loading = false;
      }
    });
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }

}
