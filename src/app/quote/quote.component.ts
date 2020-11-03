import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: Quote[] = [
    new Quote(1, 'Do not settle for less', 'Benitha Uwase', 'Benitha', new Date(2020,8,3), 0 , 0), 
  
  ];
  constructor() {
   }

  ngOnInit(): void {
  }

}
