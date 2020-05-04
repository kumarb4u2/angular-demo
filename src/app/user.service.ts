import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private _name: string;

  set name(value: string) {
    console.log("user factory", value);
    this._name = value;
  }
  get name() {
    return this._name;
  }
  constructor() {}
}
