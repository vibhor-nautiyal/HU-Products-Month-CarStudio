import { Component, OnInit } from '@angular/core';
import { card } from '../card';

@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.scss']
})
export class CarCardsComponent implements OnInit {

  constructor() { }

  cardsArray:card[]=[];

  ngOnInit(): void {
    for(let i:number = 0;i<10;i++){
      // console.log(new card());
      this.cardsArray.push(new card());
    }
  }

}
