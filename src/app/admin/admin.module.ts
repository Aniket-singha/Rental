import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';



@NgModule({
  declarations: [AdminComponent,AdminloginComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[AdminComponent,AdminloginComponent]

})
export class AdminModule { }
