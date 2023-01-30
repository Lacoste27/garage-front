import {
  AsyncPipe,
  CommonModule,
  DecimalPipe,
  LowerCasePipe,
  NgFor,
  NgIf,
} from "@angular/common";
import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { DataTablesModule } from "angular-datatables";
import { Observable, Subject } from "rxjs";
import { IReparation, IResponse } from "src/app/demo/interfaces/interface";
import { ReparationService } from "src/app/demo/services/reparations/reparation.service";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { FormsModule } from "@angular/forms";
import {
  NgbTypeaheadModule,
  NgbPaginationModule,
} from "@ng-bootstrap/ng-bootstrap";
import {
  NgbdSortableHeader,
  SortEvent,
} from "src/app/demo/services/table/sortable.directive";
import { TablesService } from "src/app/demo/services/table/tables.service";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.scss"],
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
    NgxSpinnerModule,
  ],
  providers: [TablesService, DecimalPipe],
})
export class AllComponent implements OnInit {
  reparations: IReparation[] = [];
  loading: boolean = false;

  _reparations$: Observable<IReparation[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private reparationService: ReparationService,
    public tableService: TablesService,
    private spinner: NgxSpinnerService
  ) {
    this.loading = true;
    this.spinner.show();
    this.reparationService.all().subscribe((reponse: IResponse) => {
      if (reponse.success == true) {
        this.reparations = reponse.data.reparartions;
        this.tableService._setData(this.reparations);
        this.tableService._init();
        this._reparations$ = this.tableService.reparations$;
        this.total$ = this.tableService.total$;
        this.loading = false;
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

  ngOnInit(): void {}

  applyFilter(event: Event) {}

  getAll() {}
}
