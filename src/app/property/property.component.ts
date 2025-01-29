import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { AlertItDirective } from '../alert-it.directive';

@Component({
  selector: 'app-property',
  imports: [DatePipe,CurrencyPipe,AlertItDirective],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css'
})

export class PropertyComponent {

propertyId=input.required<string>();
data:any;
imgsrc:string='';
ngOnInit(): void {
  console.log(this.propertyId())
  this.fetchData();
}




async fetchData():Promise<void>{
  const url = '/assets/property-data.json'; 

  try {
  
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    this.data = (await response.json()).data;
    this.data=this.data.find((el:any)=>el.source_id===this.propertyId())
    this.imgsrc = `https://cdn-static.staging-uniplaces.com/property-photos/${this.data.image}/large.jpg`;
 
    console.log(this.data)
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
  
}
}
