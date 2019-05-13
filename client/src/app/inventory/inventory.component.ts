import { Component, OnInit } from '@angular/core';
import { ItemDetails } from '../item-detail';
import { Observable, of } from 'rxjs';
import { ItemDetailService } from '../item-detail.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  private itemRoute = "http://localhost:3000/inventory"
  public itemDetails: ItemDetails[];
  itemDataService: ItemDetailService

  constructor(private http: HttpClient, private itemsService: ItemDetailService) {
    this.itemDataService=this.itemsService
   }

  getItemDetails() {
    this.http.get<ItemDetails[]>(this.itemRoute).subscribe(itemDetails => {
      this.itemDetails = itemDetails;
    })
  }



  ngOnInit() {
    this.getItemDetails();
  }

}
