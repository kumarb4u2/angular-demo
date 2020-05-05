import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Result } from "./result";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Result> {
    return this.http.get<Result>(`${environment.apiEndPoint}`);
  }
}
