import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { SearchComponent } from '../../../shared/components/search/search.component';
import { SlideOverComponent } from '../../../shared/components/slide-over/slide-over.component';

@Component({
  selector: 'app-pages',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SlideOverComponent,
    SearchComponent
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css'
})
export class ShellComponent {

}
