import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  group: FormGroup;
  userNameControl: FormControl;
  passwordControl: FormControl;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.userNameControl = new FormControl("jon", [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.passwordControl = new FormControl("");
    this.group = this.builder.group({
      userName: this.userNameControl,
      password: this.passwordControl,
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.group.valid) {
      this.userService.name = this.userNameControl.value;
      this.router.navigate(["welcome"]);
    }
  }
}
