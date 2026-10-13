import { Component, inject, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/Authentication.service';

@Component({
  imports: [],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage implements OnInit {
  private readonly authentication = inject(AuthenticationService);
  public isLoggedIn = false;

  ngOnInit(): void {
    this.isLoggedIn = this.authentication.isLoggedIn();
  }
}
