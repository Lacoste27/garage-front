import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IReparation, IResponse } from 'src/app/demo/interfaces/interface';
import { UsersService } from 'src/app/demo/services/users/users.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CardModule } from "../../../../../theme/shared/components/card/card.module";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, CardModule]
})
export class ListeComponent implements OnInit {

  reparations: IReparation[] = [];
  loading: boolean = true;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.listReparations().subscribe((reponse: IResponse) => {
      if (reponse.success == true) {
        this.loading = false;
        this.reparations = reponse.data.reparations;
      }
    });
  }

  tables = [
    {
      src: 'assets/images/user/avatar-1.jpg',
      title: 'Isabella Christensen',
      text: 'Lorem Ipsum is simply dummy',
      time: '11 MAY 12:56',
      color: 'text-c-green',
    },
    {
      src: 'assets/images/user/avatar-2.jpg',
      title: 'Ida Jorgensen',
      text: 'Lorem Ipsum is simply',
      time: '11 MAY 10:35',
      color: 'text-c-red',
    },
    {
      src: 'assets/images/user/avatar-3.jpg',
      title: 'Mathilda Andersen',
      text: 'Lorem Ipsum is simply dummy',
      time: '9 MAY 17:38',
      color: 'text-c-green',
    },
    {
      src: 'assets/images/user/avatar-1.jpg',
      title: 'Karla Soreness',
      text: 'Lorem Ipsum is simply',
      time: '19 MAY 12:56',
      color: 'text-c-red',
    },
    {
      src: 'assets/images/user/avatar-2.jpg',
      title: 'Albert Andersen',
      text: 'Lorem Ipsum is',
      time: '21 July 12:56',
      color: 'text-c-green',
    },
  ];
}
