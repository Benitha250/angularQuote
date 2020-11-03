import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'I have a dream', '-Martin Luther King', 'Aimee', new Date(2020,5,2), 0, 0),
    new Quote(2, 'Discipline is the bridge between quotes and accomplishment.', '-Jim Rohn', 'Paccy', new Date(2020,8,6), 0, 0),
    new Quote(3, 'Whatever you are, be a good one.”', '-Abraham Lincoln ', 'Sierra', new Date(2019,4,6), 0, 0),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }
  ngOnInit(): void {
  }
}