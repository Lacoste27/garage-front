import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IResponse } from 'src/app/demo/interfaces/interface';
import { UsersService } from 'src/app/demo/services/users/users.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  voitures: any = [];
  loading: boolean = true;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.listVoitures().subscribe((reponse: IResponse) => {
      this.voitures = reponse.data;
      this.loading = false;
    })
  }

}
