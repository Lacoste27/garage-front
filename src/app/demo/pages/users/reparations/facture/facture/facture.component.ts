import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DetailsReparations, IReparation, IResponse } from "src/app/demo/interfaces/interface";
import { ReparationService } from "src/app/demo/services/reparations/reparation.service";
import { CardModule } from "src/app/theme/shared/components/card/card.module";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  CdkDragDrop,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { UsersService } from "src/app/demo/services/users/users.service";
import { ToastService } from "src/app/theme/toast/toast.service";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-facture",
  templateUrl: "./facture.component.html",
  styleUrls: ["./facture.component.scss"],
  standalone: true,
  imports: [CommonModule, SharedModule, CardModule, NgxSpinnerModule],
})
export class FactureComponent implements OnInit {
  id: string;
  reparation: IReparation;
  montantTotal: number = 0;
  loading: boolean = false;
  submitted: boolean = false;
  error: boolean = false;
  form: FormGroup = new FormGroup({
    mode: new FormControl(""),
    montant: new FormControl(0),
  });

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private reparationService: ReparationService,
    private userService: UsersService,
    private toast: ToastService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mode: ["", Validators.required],
      montant: [0, Validators.required],
    });
    this.spinner.show();
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
      this.reparationService
        .detailReparation(this.id)
        .subscribe((reparation: IResponse) => {
          if (reparation.success == true) {
            this.loading = false;
            this.reparation = reparation.data.reparation;
            reparation.data.reparation.reparation_faire.forEach((element: DetailsReparations) => {
              this.montantTotal += Number(element.prix);
            });
            this.spinner.hide();
          }
        });
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  open(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      fullscreen: false,
      centered: true,
    });
  }

  payerReparation() {
    this.loading = true;
    this.submitted = true;
    if (this.form.invalid) {
      this.loading = false;
      return;
    }

    const paiement = {
      mode: this.form.value.mode,
      recu: this.form.value.montant,
    };

    this.userService
      .payerReparation(paiement, this.reparation._id)
      .subscribe((reponse: IResponse) => {
        if (reponse.success) {
          this.loading = false;
          this.toast.ShowSuccess(
            "Paiement",
            "Votre paiement est recu , en attente de de validation"
          );
        } else if (reponse.error) {
          this.loading = false;
          this.toast.ShowError("Paiement", reponse.message.toString());
        }
      });
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }
}
