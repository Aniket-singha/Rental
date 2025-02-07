import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  curruserName=signal('');
  private authService=inject(AuthService)
  
 

  ngOnInit() {
    const currentUser=localStorage.getItem('currentUser');
    if(currentUser){
      this.curruserName.set(JSON.parse(currentUser).username)
    }
  }
  onClick(){
    this.authService.logout();
    
  }

}
