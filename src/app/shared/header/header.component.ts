import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: false,
})
export class HeaderComponent {
  
  currUser:any=null;

  constructor(private readonly dialog: MatDialog) { }
  

  ngOnInit() {
    if(localStorage.getItem('currUser')){
      this.currUser=JSON.parse(localStorage.getItem('currUser')||'{}')
    }
  }

  

  loginAsUser() {

    const dialogRef = this.dialog.open(LoginComponent, {
      height:'550px',
      width: '500px',
      data:{}
    });

    dialogRef.afterClosed().subscribe(data => {
      // Handle after dialog close
    });
  }
}

