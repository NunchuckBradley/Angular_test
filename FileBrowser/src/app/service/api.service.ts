import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Constants } from '../constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private constants: Constants) { }

  merge(a: { [key: string]: any }, b: { [key: string]: any }): object {
    Object.keys(b).forEach(key => {
      a[key] = b[key]
    });
    return a;
  }

  runAjax(url: string, settings: { [key: string]: any } = new Object()): Observable<Object[]> {
    let defaults: { [key: string]: any } = {
      call: "get"
    }

    settings = this.merge(defaults, settings);

    if (settings['call'] == "get") {
      return this.http.get<Object[]>(url);
    }
    else if (settings['call'] == "post") {
      return this.http.post<Object[]>(url, settings['body'] ?? null, httpOptions);
    }
    else {
      return this.http.get<Object[]>("http://"+this.constants.API_BASEPOINT+"/"+this.constants.API_ENDPOINT+"/help");
    }


  }

}
