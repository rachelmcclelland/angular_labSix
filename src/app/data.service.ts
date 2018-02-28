import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  GetStudentData(): Observable<any>{
    return this.http.get("https://www.jsonblob.com/api/jsonblob/a31a3758-1c91-11e8-8434-2d9ca7a9e3a4")
      .map(obs => obs.json());
  }

}
