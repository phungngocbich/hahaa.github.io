import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) {}

  getRestaurants(): Observable<any[]> {
    return this._http.get('/assets/data/restaurant.xml', { responseType: 'text' }).pipe(
      map((xml) => {
        return this.parseXML(xml);
      })
    );
  }

  private parseXML(xml: string): any[] {
    let result: any;
    xml2js.parseString(xml, { explicitArray: false }, (err, res) => {
      if (err) {
        console.error('Error parsing XML:', err);
        return;
      }

      // Kiểm tra nếu có dữ liệu và gán kết quả
      if (res.places && res.places.place) {
        result = Array.isArray(res.places.place) ? res.places.place : [res.places.place];
      }
    });
    return result;
  }
}



