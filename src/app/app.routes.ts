import { CanMatchFn, Routes } from '@angular/router';
import { CardComponent } from './cards/card/card.component';
import { CardsComponent } from './cards/cards.component';
import { PropertyComponent } from './property/property.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';

const dummyCanUserMatch:CanMatchFn=(route,segments)=>{
  const currentUserString=localStorage.getItem('currentUser');
  if(!currentUserString) return true;  
  if(currentUserString){
        const currentUser=JSON.parse(currentUserString);
        return currentUser.role==='user';
    }
    return false;
}
const dummyCanAdminMatch:CanMatchFn=(route,segments)=>{
    const currentUserString=localStorage.getItem('currentUser');
    if(!currentUserString) return true;  
    if(currentUserString){
          const currentUser=JSON.parse(currentUserString);
          return currentUser.role==='admin';
      }
      return false;
  }

export const routes: Routes = [
  {
    path: '',
    component: CardsComponent,
  },
  {
    path: 'find-properties',
    component: CardsComponent,
  },
  {
    path: 'find-property/gb-london/:propertyId',
    component: PropertyComponent,
  },
  { 
    path: 'contact-us', 
    component: ContactUsComponent,
  },
  { 
    path:'login-user',
    component:LoginuserComponent,
    canMatch:[dummyCanUserMatch]
  },
  { 
    path:'login-admin',
    component:LoginadminComponent,
    canMatch:[dummyCanAdminMatch]
  },
  
];
