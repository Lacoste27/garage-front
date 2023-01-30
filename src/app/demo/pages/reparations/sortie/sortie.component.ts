import {
  AsyncPipe,
  CommonModule,
  LowerCasePipe,
  NgFor,
  NgIf,
} from "@angular/common";
import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { Observable } from "rxjs";
import {
  IReparation,
  IResponse,
  ReparationEtat,
} from "src/app/demo/interfaces/interface";
import { AtelierService } from "src/app/demo/services/atelier/atelier.service";
import { ReparationService } from "src/app/demo/services/reparations/reparation.service";
import {
  NgbdSortableHeader,
  SortEvent,
} from "src/app/demo/services/table/sortable.directive";
import { TablesService } from "src/app/demo/services/table/tables.service";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { ToastService } from "src/app/theme/toast/toast.service";

@Component({
  selector: "app-sortie",
  templateUrl: "./sortie.component.html",
  styleUrls: ["./sortie.component.scss"],
  standalone: true,
  imports: [
    SharedModule,
    CommonModule,
    NgFor,
    LowerCasePipe,
    FormsModule,
    AsyncPipe,
    NgbdSortableHeader,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgIf,
    RouterModule,
    NgxSpinnerModule,
  ],
})
export class SortieComponent implements OnInit {
  reparations: IReparation[] = [];

  _reparations$: Observable<IReparation[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private reparationService: ReparationService,
    private atelierService: AtelierService,
    private spinner: NgxSpinnerService,
    public tableService: TablesService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.reparationService
      .listeSortir()
      .subscribe((reponse: IResponse) => {
        if (reponse.success == true) {
          this.reparations = reponse.data;
          this.tableService._setData(this.reparations);
          this.tableService._init();
          this._reparations$ = this.tableService.reparations$;
          this.total$ = this.tableService.total$;
          this.spinner.hide();
        }
      });
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });

    this.tableService.sortColumn = column;
    this.tableService.sortDirection = direction;
  }

  validersortie(reparation_id: string) {
    this.spinner.show();
    this.atelierService.bonsortie(reparation_id).subscribe({
      next: (result) => {
        const response: IResponse = result as IResponse;
        this.spinner.hide();
        if (response.success) {
          this.toast.ShowSuccess("Reparations", "Voiture sortie");
        }
      },
      error: (error) => {
        this.spinner.hide();
        this.toast.ShowError("Erreur", error);
      },
    });
  }
}
