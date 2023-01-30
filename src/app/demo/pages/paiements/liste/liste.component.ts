import {
  AsyncPipe,
  CommonModule,
  DecimalPipe,
  LowerCasePipe,
  NgFor,
  NgIf,
} from "@angular/common";
import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { SharedModule } from "src/app/theme/shared/shared.module";
import {
  IReparation,
  IResponse,
  ReparationEtat,
} from "src/app/demo/interfaces/interface";
import { PaiementsService } from "src/app/demo/services/paiements/paiements.service";
import { RouterModule } from "@angular/router";
import { Observable } from "rxjs";
import {
  NgbdSortableHeader,
  SortEvent,
} from "src/app/demo/services/table/sortable.directive";
import { TablesService } from "src/app/demo/services/table/tables.service";
import { FormsModule } from "@angular/forms";
import { NgbPaginationModule, NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";

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
    RouterModule
  ],
  providers: [TablesService, DecimalPipe],
})
export class ListeComponent implements OnInit {
  paiements: IReparation[] = [];
  loading: boolean = false;

  _reparations$: Observable<IReparation[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private paiementService: PaiementsService,
    public tableService: TablesService
  ) {}

  ngOnInit(): void {
    this.getAll();
    this.tableService._setData(this.paiements);
    this.tableService._init();
    this._reparations$ = this.tableService.reparations$;
    this.total$ = this.tableService.total$;
  }

  getAll() {
    this.paiementService.getAll().subscribe({
      next: (response: IResponse) => {
        this.paiements = response.data.paiements;
      },
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
