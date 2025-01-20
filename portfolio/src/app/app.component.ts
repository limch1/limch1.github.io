import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryComponent } from './summary/summary.component';

@Component({
  selector: 'app-root',
  imports: [BioComponent, HeaderComponent, FooterComponent, SummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
