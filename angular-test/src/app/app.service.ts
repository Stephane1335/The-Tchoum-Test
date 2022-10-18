import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Continent } from "./contient.model";
import { HttpClient } from "@angular/common/http";

const API_LINK = "http://localhost:3000/continent/voir";
const API_LINK_SEARCH = "http://localhost:3000/continent/search?s=";
@Injectable({providedIn: 'root'})
export class AppService {

  constructor(private Http: HttpClient){}

  getContinent(): Observable<Continent[]> {
     return this.Http.get<Continent[]>(API_LINK)
  }
  getSearchContinent(search: string): Observable<Continent[]>{
    return this.Http.get<Continent[]>(API_LINK_SEARCH + search)
  }
}
