import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crud } from 'src/crud';

const httpOption = {
  headers : new HttpHeaders({"Content-Type" : "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/posts';

  getAll() : Observable<Crud[]> {
    return this.http.get<Crud[]>(this.url);
  }

  save(crud : Crud) : Observable<Crud> {
    return this.http.post<Crud>(this.url, crud, httpOption);
  }

  edit(crud : Crud) : Observable<Crud> {
    return this.http.put<Crud>(this.url + "/" + crud.id, crud, httpOption);
  }

  delete(crud : Crud) : Observable<Crud> {
    return this.http.delete<Crud>(this.url + "/" + crud.id);
  }
}
