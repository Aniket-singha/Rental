import { Routes } from '@angular/router';
import { CardComponent } from './cards/card/card.component';
import { CardsComponent } from './cards/cards.component';
import { PropertyComponent } from './property/property.component';

export const routes: Routes = [
    {
        path:'',
        component:CardsComponent
    },
    {
        path:'find-properties',
        component:CardsComponent
    },
    {
        path:'find-property/gb-london/:propertyId',
        component:PropertyComponent
    }
   
];
