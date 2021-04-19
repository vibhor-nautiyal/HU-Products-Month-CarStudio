import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  brandChoice: FormGroup;
  distanceChoice: FormGroup;
  yearChoice: FormGroup;
  fuelChoice: FormGroup;


  budgetChoices:string[];
  brandChoices:string[];
  yearChoices:string[];
  distanceChoices:string[];
  fuelChoices:string[];


  constructor() { }

  ngOnInit(): void {
    this.budgetChoice=new FormGroup(
      {
        '1-3':new FormControl(),
        '3-6':new FormControl(),
        '6-9':new FormControl(),
        '9-12':new FormControl(),
        '12+':new FormControl()
      }
    );
    this.brandChoice=new FormGroup(
      {
        'maruti-suzuki':new FormControl(),
        'honda':new FormControl(),
        'hyundai':new FormControl(),
        'tata':new FormControl(),
        'toyota':new FormControl()
      }
    );
    this.distanceChoice=new FormGroup(
      {
        '0-4000':new FormControl(),
        '4001-8000':new FormControl(),
        '8001-12000':new FormControl(),
        '12001-16000':new FormControl(),
        '16000+':new FormControl()
      }
    );
    this.yearChoice=new FormGroup(
      {
        '2000':new FormControl(),
        '2001':new FormControl(),
        '2002':new FormControl(),
        '2003':new FormControl(),
        '2004':new FormControl(),
        '2005':new FormControl(),
        '2006':new FormControl(),
        '2007':new FormControl(),
        '2008':new FormControl(),
        '2009':new FormControl(),
        '2010':new FormControl(),
        '2011':new FormControl(),
        '2012':new FormControl(),
        '2013':new FormControl(),
        '2014':new FormControl(),
        '2015':new FormControl(),
        '2016':new FormControl(),
        '2017':new FormControl(),
        '2018':new FormControl(),
        '2019':new FormControl(),
        '2020':new FormControl(),
        '2021':new FormControl()

      }
    );
    this.fuelChoice=new FormGroup(
      {
        'petrol':new FormControl(),
        'deisel':new FormControl(),
        'CNG':new FormControl(),
        'LPG':new FormControl(),
        'electric':new FormControl()
      }
    );
  }

  budgetSubmit(){
    console.log("inside budgetSubmit");
    // console.log(this.budgetChoice);
    let budget=document.querySelectorAll('#budget-filter input[type="checkbox"]:checked');
    // console.log(budget);
    this.budgetChoices=[];
    for(let element of budget as any){
      console.log(element.defaultValue);
      this.budgetChoices.push(element.defaultValue);
    }

    // runQuery();

  }
  brandSubmit(){
    console.log("inside brandSubmit");
    // console.log(this.brandChoice);
    let brand=document.querySelectorAll('#brand-filter input[type="checkbox"]:checked');
    // console.log(brand);
    this.brandChoices=[];
    for(let element of brand as any){
      console.log(element.defaultValue);
      this.budgetChoices.push(element.defaultValue);
    }

    // runQuery();
  }
  distanceSubmit(){
    console.log("inside distanceSubmit");
    // console.log(this.distanceChoice);
    let distance=document.querySelectorAll('#distance-filter input[type="checkbox"]:checked');
    // console.log(distance);
    this.distanceChoices=[];
    for(let element of distance as any){
      console.log(element.defaultValue);
      this.budgetChoices.push(element.defaultValue);
    }

    // runQuery();
  }
  yearSubmit(){
    console.log("inside yearSubmit");
    // console.log(this.yearChoice);
    let year=document.querySelectorAll('#year-filter input[type="checkbox"]:checked');
    // console.log(year);
    this.yearChoices=[];
    for(let element of year as any){
      console.log(element.defaultValue);
      this.budgetChoices.push(element.defaultValue);
    }

    // runQuery();
  }
  fuelSubmit(){
    console.log("inside fuelSubmit");
    // console.log(this.fuelChoice);
    let fuel=document.querySelectorAll('#fuel-filter input[type="checkbox"]:checked');
    // console.log(fuel);
    this.fuelChoices=[];
    for(let element of fuel as any){
      console.log(element.defaultValue);
      this.budgetChoices.push(element.defaultValue);
    }

    // runQuery();
  }

}
