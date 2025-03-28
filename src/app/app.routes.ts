import { CanMatchFn, Routes } from '@angular/router';
import { CardComponent } from './cards/card/card.component';
import { CardsComponent } from './cards/cards.component';
import { PropertyComponent } from './property/property.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { FindPropertyComponent } from './find-property/find-property.component';
import { UserComponent } from './user/user.component';
import { BookingsComponent } from './user/bookings/bookings.component';
import { PersonalDetailsComponent } from './user/personal-details/personal-details.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { AccountComponent } from './user/account/account.component';

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
    component: HomeComponent,
  },
  {
    path: 'find-properties',
    component: FindPropertyComponent,
  },
  // WLOQZ751BM6X
  {
    path: 'admin',
   
    component:AdminComponent,
    children:[
      {
        path:'login',
        component:AdminloginComponent
      }
    ]
  },
  {
    path:'users',
    component:UserComponent,
    children:[
      {
        path:'bookings',
        component:BookingsComponent
      },
      {
        path:'personal-details',
        component:PersonalDetailsComponent
      },
      {
        path:'wishlist',
        component:WishlistComponent
      },
      {
        path:'account',
        component:AccountComponent
      }
    ]
  },
  { 
    path: 'contact', 
    component: ContactUsComponent,
  },

];
