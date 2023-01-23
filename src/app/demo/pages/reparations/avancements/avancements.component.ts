import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import {
  CdkDragDrop,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  DetailsReparations,
  IReparation,
  IResponse,
  ReparationVoitureEtat,
} from "src/app/demo/interfaces/interface";
import { ReparationService } from "src/app/demo/services/reparations/reparation.service";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { ToastService } from "src/app/theme/toast/toast.service";

@Component({
  selector: "app-avancements",
  templateUrl: "./avancements.component.html",
  styleUrls: ["./avancements.component.scss"],
  standalone: true,
  imports: [SharedModule, CommonModule, DragDropModule],
})
export class AvancementsComponent implements OnInit {
  reparation: IReparation;
  encours: DetailsReparations[] = [];
  finis: DetailsReparations[] = [];

  id: string;
  loading: boolean = false;
  submitted: boolean = false;
  closeResult: string = "";

  form: FormGroup = new FormGroup({
    cause: new FormControl(""),
    solution: new FormControl(""),
    prix: new FormControl(0),
  });

  constructor(
    private modalService: NgbModal,
    private reparationsService: ReparationService,
    private route: ActivatedRoute,
    private toast: ToastService,
    private formBuilder: FormBuilder
  ) {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  drop(event: CdkDragDrop<DetailsReparations[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const details: DetailsReparations = event.container.data[
        event.currentIndex
      ] as DetailsReparations;

      this.reparationsService
        .changeReparationsDetailseEtat(this.reparation._id, details._id)
        .subscribe({
          next: (response) => {
            this.toast.ShowSuccess("Etat", "Etat changé");
          },
        });
    }
  }

  ngOnInit(): void {
    this.loading = true;
    this.getAll();

    this.form = this.formBuilder.group({
      cause: ["", Validators.required],
      solution: ["", Validators.required],
      prix: ["", Validators.required],
    });

    this.reparationsService.Refresh.subscribe((response) => {
      this.getAll();
    });
  }

  getAll() {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.reparationsService
        .detailReparation(this.id)
        .subscribe((reparation: IResponse) => {
          if (reparation.success == true) {
            this.loading = false;
            this.reparation = reparation.data.reparation;

            this.encours = this.reparation.reparation_faire.filter(
              (reparation) => reparation.etat == ReparationVoitureEtat.encours
            ) as DetailsReparations[];
            this.finis = this.reparation.reparation_faire.filter(
              (reparation) => reparation.etat == ReparationVoitureEtat.fini
            ) as DetailsReparations[];
          }
        });
    });
  }

  open(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: "modal-basic-title",
        fullscreen: true,
        centered: true,
      })
  }

  addReparationDetails() {
    this.loading = true;
    this.submitted = true;
    const value = this.form.value;

    if (this.form.invalid) {
      this.loading = false;
      this.submitted = false;
      return;
    }

    const details: DetailsReparations = {
      _id: "",
      cause: value.cause,
      solution: value.solution,
      prix: value.prix,
      etat: ReparationVoitureEtat.encours,
    };

    const reparation_id = this.reparation._id;

    this.reparationsService
      .addReparationDetails(reparation_id, details)
      .subscribe({
        next: (result) => {
          const response: IResponse = result as IResponse;
          if (response.success) {
            this.loading = false;
            this.toast.ShowSuccess("Reparations", "Réparations voiture ajouté");
          }
        },
        error: (error) => {
          this.loading = false;
          this.toast.ShowError("Erreur", "Une erreur s'est produite");
        },
      });
  }
}
