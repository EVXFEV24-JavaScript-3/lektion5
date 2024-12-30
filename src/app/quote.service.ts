import { Injectable } from '@angular/core';

export interface Quote {
  quote: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quote: Quote | null = null;

  constructor() {
    this.generateQuote();
  }

  generateQuote(): void {
    fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then((apiQuote: Quote) => this.quote = apiQuote);
  }
}
