import { Component, Input, OnInit } from '@angular/core';
import { card } from '../card';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {

  @Input() card: card;

  constructor() { }

  ngOnInit(): void {

  }

}
