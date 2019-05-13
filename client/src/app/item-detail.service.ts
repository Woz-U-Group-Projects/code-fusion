import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemDetails } from './item-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ItemDetailService {

  constructor(private http: HttpClient) {}

  // options allows us to flag that we are using credentials, which will allow the jtw cookie on all requests
  options = { withCredentials: true };

  // base url of the express back end
// tslint:disable-next-line: no-inferrable-types
  url: string = 'http://localhost:3000/inventory';

 // boolean value to hold the login status
// tslint:disable-next-line: no-inferrable-types
  loggedIn: boolean = false;

 // add a shoe item to inventory
 // POST base url/receiving
 addNewItem(itemDetail: ItemDetails): Observable<string> {
   return this.http.post<string>(this.url + '/receiving', itemDetail, this.options);
 }

 submit(model: ItemDetails[]) {
  return this.http.post<any>(this.url, model)
}

}
