import { Component } from "@angular/core";
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";
import { animate, style, transition, trigger } from "@angular/animations";
import { AuthentificationService } from "src/app/demo/services/authentification/authentification.service";
import { TokenService } from "src/app/demo/services/jwt/token.service";

@Component({
  selector: "app-nav-right",
  templateUrl: "./nav-right.component.html",
  styleUrls: ["./nav-right.component.scss"],
  providers: [NgbDropdownConfig],
  animations: [
    trigger("slideInOutLeft", [
      transition(":enter", [
        style({ transform: "translateX(100%)" }),
        animate("300ms ease-in", style({ transform: "translateX(0%)" })),
      ]),
      transition(":leave", [
        animate("300ms ease-in", style({ transform: "translateX(100%)" })),
      ]),
    ]),
    trigger("slideInOutRight", [
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate("300ms ease-in", style({ transform: "translateX(0%)" })),
      ]),
      transition(":leave", [
        animate("300ms ease-in", style({ transform: "translateX(-100%)" })),
      ]),
    ]),
  ],
})
export class NavRightComponent {
  visibleUserList: boolean;
  chatMessage: boolean;
  friendId: boolean;
  username: string;

  constructor(
    config: NgbDropdownConfig,
    private authService: AuthentificationService,
    private token: TokenService
  ) {
    config.placement = "bottom-right";
    this.visibleUserList = false;
    this.chatMessage = false;
    this.username = this.token.GetUser().nom;
  }



  onChatToggle(friend_id) {
    this.friendId = friend_id;
    this.chatMessage = !this.chatMessage;
  }

  onLogout() {
    this.authService.logout();
  }
}
