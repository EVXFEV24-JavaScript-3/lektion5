import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lektion5';

  constructor(private router: Router) { }

  navigateByTypeScript(): void {
    this.router.navigate(["/welcome", "Hejsan!"]);
  }
}
