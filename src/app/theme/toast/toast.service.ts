import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: ToastrService) { }

  ShowSuccess(title: string, content:string){  
    this.toast.success(content,title);
  }

  ShowError(title: string, content:string){  
    this.toast.error(content,title);
  }
}
