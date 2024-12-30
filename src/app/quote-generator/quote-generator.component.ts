import { Component } from '@angular/core';
import { Quote, QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-generator',
  templateUrl: './quote-generator.component.html',
  styleUrl: './quote-generator.component.css'
})
export class QuoteGeneratorComponent {

  constructor(private quoteService: QuoteService) { }

  public get quote(): Quote | null {
    return this.quoteService.quote;
  }

  generateQuote(): void {
    this.quoteService.generateQuote();
  }
}
