import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  standalone: true,
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  imports: [CommonModule,FormsModule,FormlyModule, ReactiveFormsModule]
})
export class ContactUsComponent implements OnInit {
  form=new FormGroup({});
  model:any = {};
  fields:FormlyFieldConfig[] = [];

  ngOnInit() {
    fetch('assets/form-data.json')
      .then(response => response.json())
      .then((data: any) => {
        this.fields = data.data;
        console.log(data)
      })
      .catch(error => console.error('Error loading form JSON:', error));
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    }
  }
}
