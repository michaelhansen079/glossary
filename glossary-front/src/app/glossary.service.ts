import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Glossary} from "./glossary";

@Injectable({
  providedIn: 'root'
})
export class GlossaryService {

  constructor(private http: HttpClient) { }

  private urlBase = "http://localhost:8080/glossary/rest/";

  public countGlossaries(): Observable<number> {
    let url:string = this.urlBase + "count";
    return this.http.get<number>(url);
  }

  public getGlossaries() : Observable<Glossary[]> {
    let url:string = this.urlBase;
    return this.http.get<Glossary[]>(url);
  }

  public getGlossary(id: string) : Observable<Glossary> {
    let url:string = this.urlBase + id;
    return this.http.get<Glossary>(url);
  }

  public addGlossary(glossary: Glossary): Observable<any> {
    let url:string = this.urlBase;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, glossary, {headers: headers, responseType: 'text'});
  }

  public deleteGlossary(id: string): Observable<any> {
    let url:string = this.urlBase + id;
    return this.http.delete(url, {responseType: 'text'});
  }

  public updateGlossary(glossary: Glossary): Observable<Glossary> {
    let url:string = this.urlBase;
    return this.http.put<Glossary>(url, glossary);
  }
}
