import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ThankyouComponent } from '../contact-us/thankyou/thankyou.component';
import { OtpComponent } from './otp/otp.component';
import { HttpClient } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component'; // Import the NotFoundComponent
import { WrongotpComponent } from './wrongotp/wrongotp.component';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  register:boolean=false;
  form!:FormGroup;
  otpForm!:FormGroup;
  otpsent:boolean=false;
  loggedinUser:any=null;
  currUser:any=null;
constructor(private readonly dialog: MatDialog, private http: HttpClient) { }

  ngOnInit():void{
    this.form=new FormGroup({
     firstName:new FormControl('', this.register ? [Validators.required, Validators.minLength(3)] : []), 
     lastName:new FormControl('',this.register ? [Validators.required,Validators.minLength(3)]:[]),
     emailId:new FormControl('', this.register?[Validators.required,Validators.email]:[]), 
     dialCode:new FormControl('+1', [Validators.required]),
     number:new FormControl('1234567890',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
     loginWithEmail:new FormControl(false),
     above18:new FormControl(false,this.register?[Validators.requiredTrue]:[]) 

    })
    this.otpForm=new FormGroup({
      otp:new FormControl('')
    })

    this.form.get('loginWithEmail')?.valueChanges.subscribe((isChecked) => {
      if (isChecked) {
        // this.form.get('dialCode')?.reset(); 
        this.form.get('number')?.reset();
        this.form.get('dialCode')?.clearValidators();
        this.form.get('number')?.clearValidators();
        this.form.get('emailId')?.setValidators([Validators.required, Validators.email]);
      } else {
        this.form.get('emailId')?.reset(); // Reset emailId value
        this.form.get('emailId')?.clearValidators();
        this.form.get('dialCode')?.setValidators([Validators.required]); // Ensure dialCode is required
        this.form.get('number')?.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
      }
      this.form.get('dialCode')?.updateValueAndValidity();
      this.form.get('number')?.updateValueAndValidity();
      this.form.get('emailId')?.updateValueAndValidity();
    });
  }

  switcher() {
    this.register = !this.register;
    
    if (this.register) {
      this.form.get('firstName')?.setValidators([Validators.required, Validators.minLength(3)]);
      this.form.get('lastName')?.setValidators([Validators.required, Validators.minLength(3)]);
    } else {
      this.form.get('firstName')?.clearValidators();
      this.form.get('lastName')?.clearValidators();
    }

    this.form.get('firstName')?.updateValueAndValidity();
    this.form.get('lastName')?.updateValueAndValidity();
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
    } else {
      const dialCode = this.form.get('dialCode')?.value;
      const number = this.form.get('number')?.value;

      this.http.get<{ data: any[] }>('/assets/users.json').subscribe((response) => {
        const user = response.data.find(
          (u) => u.countryCode === dialCode && u.mobileNumber === number
        );

        if (user) {
          this.loggedinUser=user;
          this.otpsent=true;
          this.dialog.open(OtpComponent, {
            height: '280px',
            width: '380px',
            data: {}
          });
        }
        else {
          this.dialog.open(NotFoundComponent, {
            height: '280px',
            width: '380px',
            data: {}
          });
        }
      });
    }
  }

  onSubmit2(): void {
    const otp = this.otpForm.get('otp')?.value;
    if (otp === this.loggedinUser.otp) {
      // Store the logged-in user in localStorage
      this.currUser=this.loggedinUser
      localStorage.setItem('currUser', JSON.stringify(this.currUser));
      // Reload the page
      window.location.reload();
    } else {
      localStorage.removeItem('currUser');
      this.currUser=null
      this.dialog.open(WrongotpComponent, {
        height: '280px',
        width: '380px',
        data: {}
      });
    }
  }
}

