import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  userName: string;
  numberOfLikes: number = 5;
  idFromUrl: string;
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.userName = this.userService.name;
  }

  ngOnInit(): void {
    this.idFromUrl = this.activatedRoute?.snapshot?.params["id"];
  }

  login() {
    this.router.navigate(["login"]);
  }
}
