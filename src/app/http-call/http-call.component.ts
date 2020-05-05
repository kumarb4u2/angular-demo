import { Component, OnInit } from "@angular/core";
import { CharacterService } from "../character.service";
import { Result } from "../result";
import { Observable } from "rxjs";

@Component({
  selector: "app-http-call",
  templateUrl: "./http-call.component.html",
  styleUrls: ["./http-call.component.scss"],
})
export class HttpCallComponent implements OnInit {
  result: Observable<Result>;
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.result = this.characterService.getCharacters();
  }
}
