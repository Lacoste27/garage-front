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
import { IReparation, IResponse } from "src/app/demo/interfaces/interface";
import {
  NgbdSortableHeader,
  SortEvent,
} from "src/app/demo/services/table/sortable.directive";
import { TablesService } from "src/app/demo/services/table/tables.service";
import { UsersService } from "src/app/demo/services/users/users.service";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { ToastService } from "src/app/theme/toast/toast.service";
import { CardModule } from "../../../../../theme/shared/components/card/card.module";

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
  reparations: IReparation[] = [];
  loading: boolean = true;

  _reparations$: Observable<IReparation[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private userService: UsersService,
    public tableService: TablesService,
    private spinner: NgxSpinnerService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.userService.listReparations().subscribe((reponse: IResponse) => {
      if (reponse.success == true) {
        this.loading = false;
        this.reparations = reponse.data.reparations;
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

  recuperer(reparation_id: string) {
    this.spinner.show();
    this.userService.recupererVoiture(reparation_id).subscribe({
      next: (response: IResponse) => {
        this.spinner.hide();
        if (response.success) {
          this.toast.ShowSuccess("Recupération", response.message.toString());
        } else if (response.error) {
          this.toast.ShowError("Recupération", response.message.toString());
        }
      },
      error: (error) => {
        this.spinner.hide();
        this.toast.ShowError("Recupération", error);
      },
    });
  }
}
