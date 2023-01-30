import { DatePipe, DecimalPipe, KeyValuePipe, LowerCasePipe } from "@angular/common";
import { Injectable, PipeTransform } from "@angular/core";
import {
  BehaviorSubject,
  debounceTime,
  delay,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
} from "rxjs";
import { IReparation, ISearchResult } from "../../interfaces/interface";
import { SortColumn, SortDirection } from "./sortable.directive";

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(
  reparations: IReparation[],
  column: SortColumn,
  direction: string
): IReparation[] {
  if (direction === "" || column === "") {
    return reparations;
  } else {
    return [...reparations].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === "asc" ? res : -res;
    });
  }
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

function matches(finds: string, term: string) {
  return finds.includes(term);
}

@Injectable({
  providedIn: "root",
})
export class TablesService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _reparations$ = new BehaviorSubject<IReparation[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private reparations: IReparation[] = [];

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: "",
    sortColumn: "",
    sortDirection: "",
  };

  constructor() {}

  public _init() {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._reparations$.next(result.reparations);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  public _setData(reparations: IReparation[]) {
    this.reparations = reparations;
  }

  private _search(): Observable<ISearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } =
      this._state;

    // 1. sort
    let reparations = sort(this.reparations, sortColumn, sortDirection);

    // 2. filter
    reparations = reparations.filter((reparation) =>
      matches(reparation.client.nom, searchTerm)
    );

    const total = reparations.length;

    // 3. paginate
    reparations = reparations.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
    return of({ reparations, total });
  }

  get reparations$() {
    return this._reparations$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }

  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }
}
