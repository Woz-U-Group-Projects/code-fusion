import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemDetail } from './item-detail';
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
 addNewItem(itemDetail: ItemDetail): Observable<string> {
   return this.http.post<string>(this.url + '/receiving', itemDetail, this.options);
 }

//  getAllInventory() {
//   return new Promise((resolve, reject) => {
//     this.http.get('/inventory')
//       .map(res => res.json())
//       .subscribe(res => {
//         resolve(res);
//       }, (err) => {
//         reject(err);
//       });
//   });
//  }

}
