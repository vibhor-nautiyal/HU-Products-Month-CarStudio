import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  budgetFilter:boolean = true;
  brandFilter:boolean = true;
  yearFilter:boolean = true;
  distanceFilter:boolean = true;
  fuelFilter:boolean = true;


  budgetChoice= new FormGroup({});


  constructor() { }

  ngOnInit(): void {
    this.budgetChoice=new FormGroup(
      {

      }
    );
  }

  test(){
    console.log("inside test");
  }

}
