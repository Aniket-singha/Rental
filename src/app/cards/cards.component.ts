import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [CardComponent,NgFor],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})

export class CardsComponent {
data:any;

ngOnInit(): void {
  this.fetchData();
}

async fetchData():Promise<void>{
  const url = '/assets/data.json'; 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    this.data = (await response.json()).data.property_list
    console.log(this.data)
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
  
}
}

