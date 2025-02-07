import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormlyModule,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardsComponent,
    ContactUsComponent,
    RouterOutlet,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
 
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
