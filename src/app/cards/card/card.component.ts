import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone:false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required:true}) data!:{
    source: string;
    source_id: string;
    price: number;
    available_from: string; 
    title: string;
    currency_code: string; 
    billing_cycle: string; 
    page_number: string; 
    image: string;
  };  

  imgsrc: string = '';

  ngOnChanges(): void {
   
      this.imgsrc = `https://cdn-static.staging-uniplaces.com/property-photos/${this.data.image}/large.jpg`;
    
  }
}
