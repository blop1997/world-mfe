import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-travel-tips',
  imports: [RouterOutlet],
  templateUrl: './travel-tips.component.html',
  styleUrl: './travel-tips.component.css',
})
export class TravelTipsComponent {
  title = 'app-travel-tips';
}
