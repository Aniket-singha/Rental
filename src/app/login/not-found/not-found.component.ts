import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  standalone:false
})
export class NotFoundComponent {
    constructor(private dialogRef: MatDialogRef<NotFoundComponent>) {}
    
      closeDialog(): void {
        this.dialogRef.close();
      }
}
