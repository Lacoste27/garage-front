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
import { ReparationService } from "src/app/demo/services/reparations/reparation.service";
import { NgbdSortableHeader, SortEvent } from "src/app/demo/services/table/sortable.directive";
import { TablesService } from "src/app/demo/services/table/tables.service";
import { SharedModule } from "src/app/theme/shared/shared.module";

@Component({
  selector: "app-liste",
  templateUrl: "./liste.component.html",
  styleUrls: ["./liste.component.scss"],
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
export class ListeComponent implements OnInit {
  loading: boolean = false;
  reparations: IReparation[] = [];

  _reparations$: Observable<IReparation[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private reparationService: ReparationService,
    private spinner: NgxSpinnerService,
    public tableService: TablesService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.reparationService
      .listeReparation(ReparationEtat.deposer)
      .subscribe((reponse: IResponse) => {
        if (reponse.success == true) {
          this.reparations = reponse.data.reparartions;
          this.loading = false;
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
}
