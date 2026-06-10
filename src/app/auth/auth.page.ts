import { Component, OnInit } from '@angular/core';
import { Auth } from './auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false
})
export class AuthPage implements OnInit {

   constructor(private authService: Auth, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    this.authService.login();
    this.router.navigateByUrl('/places/discover');
  }
}
