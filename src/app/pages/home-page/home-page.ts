import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../service/Authentication.service';

@Component({
  imports: [],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {
  private readonly authenication = inject(AuthenticationService)
  public isLoggedIn : boolean = false;

  ngOnInit() {
    this.isLoggedIn = this.authenication.isLoggedIn();
  }
}
