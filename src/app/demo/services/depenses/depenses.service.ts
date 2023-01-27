import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IDepense } from "../../interfaces/interface";

@Injectable({
  providedIn: "root",
})
export class DepensesService {
  base_url = "https://back-m1p10mean.onrender.com/depenses/";

  private _refresh = new Subject<void>();

  get Refresh() {
    return this._refresh;
  }
  
  constructor(private http: HttpClient) {}

  add(depense: any) {
    const url = this.base_url + "add";
    return this.http.post(url, depense);
  }

  all() {
    return this.http.get(this.base_url + "all");
  }
}
