import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent,BannerComponent,CardsComponent, ContactUsComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'rent';
}
