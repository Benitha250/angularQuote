import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Do not settle for less', 'Benitha Uwase', 'Benitha', new Date(2020,8,3), 0 , 0), 
  
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }  

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].showDescription}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }


  constructor() {
   }

  ngOnInit(): void {
  }

}
