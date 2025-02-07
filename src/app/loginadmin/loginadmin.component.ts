import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginadmin',
  imports: [CommonModule,FormsModule,FormlyModule,ReactiveFormsModule],
  templateUrl: './loginadmin.component.html',
  styleUrl: './loginadmin.component.css'
})
export class LoginadminComponent {
 
private authService=inject(AuthService) 
private router=inject(Router)
form=new FormGroup({});
  model:any = {
    username:'',
    email:'',
    role:''
  };
  fields:FormlyFieldConfig[] = [
    {
      "key": "username",
      "type": "input",
      "templateOptions": {
        "label": "Username",
        "placeholder": "Enter your first name",
        "required": true
      }
    },
    {
      "key": "email",
      "type": "input",
      "templateOptions": {
        "label": "Email",
        "placeholder": "Enter your email",
        "required": true
      }
    },
    {
      "key": "role",
      "type": "select",
      "templateOptions": {
        "label": "Role",
        "placeholder": "Select your role",
        "options": [
          { "label": "User", "value": "user" },
          { "label": "Admin", "value": "admin" },
        ],
        "required": true
      }
    }
  ];

 

  onSubmit() {
    console.log(this.model)
    const username=this.model.username
    const email=this.model.email
    const role=this.model.role
   this.authService.login(username,email,role)
  this.router.navigate(['/'])
  }
}
