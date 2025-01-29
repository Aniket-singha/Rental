import { Directive } from '@angular/core';

@Directive({
  selector: 'button[appAlertIt]',
  host:{
    '(click)':'onClick()'
  }
})
export class AlertItDirective {
 
  constructor() { 
    
  }
  onClick(event:MouseEvent){
    alert('Hello World');
  }
}
