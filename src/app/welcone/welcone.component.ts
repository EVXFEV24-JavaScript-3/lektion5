import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcone',
  templateUrl: './welcone.component.html',
  styleUrl: './welcone.component.css'
})
export class WelconeComponent {
  greeting: string | null = "";

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => this.greeting = params.get("greeting"));
  }
}
