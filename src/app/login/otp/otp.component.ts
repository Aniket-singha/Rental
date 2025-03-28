import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-otp',
  standalone: false,
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent {
  constructor(private dialogRef: MatDialogRef<OtpComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
