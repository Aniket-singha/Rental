import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-wrongotp',
  standalone:false,
  templateUrl: './wrongotp.component.html',
  styleUrl: './wrongotp.component.css'
})
export class WrongotpComponent {
  constructor(private dialogRef: MatDialogRef<WrongotpComponent>) {}
      
        closeDialog(): void {
          this.dialogRef.close();
        }
}
