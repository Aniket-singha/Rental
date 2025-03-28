import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { first } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ThankyouComponent } from './thankyou/thankyou.component';

@Component({
  standalone: false,
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  
})

export class ContactUsComponent implements OnInit {

  form!: FormGroup;

  constructor(private readonly dialog: MatDialog){

  }

  ngOnInit(): void {

      this.form=new FormGroup({
        firstName:new FormControl('', [Validators.required, Validators.minLength(3)]),
        lastName:new FormControl('',[Validators.required,Validators.minLength(3)]),
        emailId:new FormControl('', [Validators.required,Validators.email]),
        dialCode:new FormControl('',[Validators.required]),
        number:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
        message:new FormControl('',[Validators.required]),
      })

  
  }

  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('email')) {
      return 'Enter a valid email';
    }
    if (control?.hasError('minlength')) {
      return `Minimum length is ${control.errors?.['minlength'].requiredLength}`;
    }
    if (control?.hasError('maxlength')) {
      return `Maximum length is ${control.errors?.['maxlength'].requiredLength}`;
    }
    return '';
  }

  onsubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log('Form is invalid');
    } 
    else {
      this.form.reset();
      const dialogRef = this.dialog.open(ThankyouComponent,{
            height:'380px',
            width: '380px',
            data:{}
          });
    }
  }
  
}
