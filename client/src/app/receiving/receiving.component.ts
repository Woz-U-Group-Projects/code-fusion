import { Component, OnInit } from '@angular/core';
import { ItemDetails } from '../item-detail';
import { ItemDetailService } from '../item-detail.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-receiving',
  templateUrl: './receiving.component.html',
  styleUrls: ['./receiving.component.css']
})
export class ReceivingComponent implements OnInit {
  // initialize an empty shoe object

  itemDetail: ItemDetails = new ItemDetails();

  constructor(private itemDetailService: ItemDetailService, private router: Router) { }

  addItem(): void {
    this.itemDetailService.addNewItem(this.itemDetail).subscribe(
      () => {
      // item added, send them to inventory page
      this.router.navigate(['/inventory']);
    }
    );
  }

  ngOnInit() {
  }

}
