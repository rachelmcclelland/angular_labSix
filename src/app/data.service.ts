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

  GetWeatherData(): Observable<any>{
    return this.http.get("http://openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22")
      .map(obs => obs.json());
  }
}
